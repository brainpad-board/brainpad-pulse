#!/usr/bin/env node
// Re-generates the pre-cached hex files under hexcache-extras/.
//
// Why: when a student clicks Download in the editor, PXT hashes their
// compiled C++ and looks for `hexcache/<sha>.hex` on the server. If the
// hash misses, PXT falls back to a cloud compile service — which is NOT
// available for brainpad. So any extension program whose hash isn't
// pre-cached shows "The hex file is not available".
//
// This script compiles a small set of sample programs — one per common
// extension — on this machine using the native arm-none-eabi-gcc
// toolchain, then saves the resulting hex files into hexcache-extras/.
// From there, `scripts/post-build.mjs` merges them into every deploy.
//
// Run this script when:
//   - You're setting up pre-caching for a new extension
//   - The pxt-core, pxt-common-packages, or codal versions change
//     (hex SHA changes with the toolchain; old hexes stop matching)
//
// Usage:
//   npm run harvest-hexes
//
// Needs: setup already done (siblings linked), arm-none-eabi-gcc on PATH.

import { execSync } from "node:child_process";
import {
    copyFile,
    mkdir,
    readdir,
    readFile,
    rm,
    writeFile,
} from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

// One entry per sample program to pre-compile. Each becomes a temporary
// package in libs/ during the build, then gets deleted. The resulting
// hex file (whatever SHA it produces) lands in hexcache-extras/.
//
// Keep each program minimal — just enough to force the extension's C++
// shims into the compiled binary. The SHA depends on which C++ gets
// linked, not on the specific values the TypeScript uses.
const HARVEST_PROGRAMS = [
    {
        name: "neopixel",
        deps: { brainpad: "file:../brainpad", neopixel: "file:../neopixel" },
        main: `neopixel.create(pins.P0, 2).showColor(0xFF0000)\n`,
    },
    {
        name: "infrared",
        deps: { brainpad: "file:../brainpad", infrared: "file:../infrared" },
        main: `infrared.init(Pins.P1)\ninfrared.onPressEvent(RemoteButton.Up, () => {})\n`,
    },
    {
        name: "sonar",
        deps: { brainpad: "file:../brainpad", sonar: "file:../sonar" },
        main: `sonar.ping(pins.P1, pins.P2, PingUnit.Centimeters)\n`,
    },
    {
        name: "music",
        deps: { brainpad: "file:../brainpad", music: "file:../music" },
        main: `music.playTone(262, music.beat(BeatFraction.Half))\n`,
    },
    {
        name: "brainbot",
        deps: { brainpad: "file:../brainpad", brainbot: "file:../brainbot" },
        main: `brainbot.Beep()\n`,
    },
    {
        name: "braingamer",
        deps: { brainpad: "file:../brainpad", braingamer: "file:../braingamer" },
        main: `braingamer.Beep()\n`,
    },
    {
        name: "kitchen-sink",
        deps: {
            brainpad: "file:../brainpad",
            neopixel: "file:../neopixel",
            infrared: "file:../infrared",
            sonar: "file:../sonar",
            music: "file:../music",
        },
        main:
            `neopixel.create(pins.P0, 1).showColor(0xFF0000)\n` +
            `sonar.ping(pins.P1, pins.P2, PingUnit.Centimeters)\n` +
            `infrared.init(Pins.P3)\n` +
            `music.playTone(262, music.beat(BeatFraction.Half))\n`,
    },
];

const projectDir = process.cwd();
const libsDir = join(projectDir, "libs");
const hexCacheDir = join(projectDir, "built", "hexcache");
const extrasDir = join(projectDir, "hexcache-extras");
const pxtTargetPath = join(projectDir, "pxtarget.json");

function sh(cmd, cwd = projectDir) {
    console.log(`\n$ ${cmd}`);
    execSync(cmd, { cwd, stdio: "inherit" });
}

async function listHexes(dir) {
    if (!existsSync(dir)) return new Set();
    const files = await readdir(dir);
    return new Set(files.filter((f) => f.endsWith(".hex")));
}

async function writeHarvestPackage(program) {
    // Directory name must end in "prj" so pxt's build loop treats it as
    // a project and triggers hex caching for it.
    const dirName = `_harvest_${program.name}_prj`;
    const dir = join(libsDir, dirName);

    await mkdir(dir, { recursive: true });

    const pxtJson = {
        name: `_harvest_${program.name}`,
        description: `Auto-generated harvest project for ${program.name}. Deleted after harvest.`,
        dependencies: program.deps,
        files: ["main.ts"],
    };
    await writeFile(join(dir, "pxt.json"), JSON.stringify(pxtJson, null, 2));
    await writeFile(join(dir, "main.ts"), program.main);

    return { dirName, dir };
}

async function removeHarvestPackages(dirNames) {
    for (const dirName of dirNames) {
        await rm(join(libsDir, dirName), { recursive: true, force: true });
    }
}

async function patchPxtTarget(dirNames) {
    const original = await readFile(pxtTargetPath, "utf8");
    const target = JSON.parse(original);
    target.bundleddirs = [
        ...target.bundleddirs,
        ...dirNames.map((d) => `libs/${d}`),
    ];
    await writeFile(pxtTargetPath, JSON.stringify(target, null, 2));
    return original;
}

async function restorePxtTarget(original) {
    await writeFile(pxtTargetPath, original);
}

// --- Main ---

if (!existsSync(join(projectDir, "node_modules", "pxt-core"))) {
    console.error("harvest-hexes: node_modules/pxt-core missing. Run `npm run setup` first.");
    process.exit(1);
}

await mkdir(extrasDir, { recursive: true });

const hexesBeforeHarvest = await listHexes(hexCacheDir);
console.log(`== Hex cache before harvest: ${hexesBeforeHarvest.size} files ==`);

const createdDirs = [];
let pxtTargetBackup = null;

try {
    console.log(`\n== Creating ${HARVEST_PROGRAMS.length} temporary harvest packages ==`);
    for (const program of HARVEST_PROGRAMS) {
        const { dirName } = await writeHarvestPackage(program);
        createdDirs.push(dirName);
        console.log(`  created  libs/${dirName}`);
    }

    console.log(`\n== Adding harvest packages to pxtarget.json bundleddirs (temporarily) ==`);
    pxtTargetBackup = await patchPxtTarget(createdDirs);

    console.log(`\n== Running pxt staticpkg (compiles each harvest package into a hex) ==`);
    console.log("This may take several minutes — one native build per unique program shape.");
    sh("npx pxt staticpkg --route brainpad-pulse");
} finally {
    if (pxtTargetBackup) {
        console.log(`\n== Restoring pxtarget.json ==`);
        await restorePxtTarget(pxtTargetBackup);
    }
    if (createdDirs.length) {
        console.log(`== Removing temporary harvest packages ==`);
        await removeHarvestPackages(createdDirs);
    }
}

const hexesAfterHarvest = await listHexes(hexCacheDir);
const newHexes = [...hexesAfterHarvest].filter((h) => !hexesBeforeHarvest.has(h));

console.log(`\n== Hex cache after harvest: ${hexesAfterHarvest.size} files (${newHexes.length} new) ==`);

if (newHexes.length === 0) {
    console.warn("No new hexes produced. Check pxt staticpkg output above for compile errors.");
    process.exit(1);
}

console.log(`\n== Copying new hex files into hexcache-extras/ ==`);
for (const hex of newHexes) {
    await copyFile(join(hexCacheDir, hex), join(extrasDir, hex));
    console.log(`  saved  ${hex}`);
}

console.log(`\n== Done ==`);
console.log(`${newHexes.length} new hex file(s) saved. Commit hexcache-extras/ to git`);
console.log(`so every future deploy includes them.`);
