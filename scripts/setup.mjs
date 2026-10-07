#!/usr/bin/env node
// One-time setup. Clones the two Microsoft PXT repos this target is built
// against (at the exact versions pinned in PINNED_REPOS below), installs
// their dependencies, builds pxt-core, pins type packages that otherwise
// drift to breaking versions, and links everything into this project.
//
// Idempotent: safe to run multiple times. Skips clones that already exist.
//
// Usage:
//   npm run setup
//
// After this, you can run `npm run dev`, `npm run build`, `npm run deploy`.

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const PINNED_REPOS = [
    {
        name: "pxt",
        url: "https://github.com/microsoft/pxt.git",
        tag: "v7.3.7",
        build: true,
    },
    {
        name: "pxt-common-packages",
        url: "https://github.com/microsoft/pxt-common-packages.git",
        tag: "v9.3.11",
        build: false,
        // When pxt-common-packages@9.3.11 does an unpinned `npm install`, modern
        // npm resolves @types/node to v26 and @types/ws to v8, both of which
        // use TypeScript syntax the bundled typescript@4.9 cannot parse — this
        // breaks `common sim build` with cryptic TS1005 errors.
        //
        // Pin them to versions that match pxt-core's own @types/node pin.
        pinDeps: {
            "@types/node": "10.14.2",
            "@types/ws": "7.4.7",
        },
    },
];

const projectDir = process.cwd();
const parentDir = resolve(projectDir, "..");

function sh(cmd, cwd = projectDir) {
    console.log(`\n$ ${cmd}\n  (cwd: ${cwd})`);
    execSync(cmd, { cwd, stdio: "inherit" });
}

for (const repo of PINNED_REPOS) {
    const dir = resolve(parentDir, repo.name);

    if (existsSync(dir)) {
        console.log(`\n== ${repo.name} already present at ${dir} — skipping clone ==`);
    } else {
        console.log(`\n== Cloning ${repo.name}@${repo.tag} to ${dir} ==`);
        sh(`git clone --depth 1 --branch ${repo.tag} ${repo.url} ${repo.name}`, parentDir);
    }

    console.log(`\n== Installing dependencies in ${repo.name} ==`);
    sh("npm install --no-audit --no-fund", dir);

    if (repo.pinDeps) {
        const deps = Object.entries(repo.pinDeps).map(([n, v]) => `${n}@${v}`).join(" ");
        console.log(`\n== Pinning in ${repo.name}: ${deps} ==`);
        sh(`npm install --save-dev --no-audit --no-fund ${deps}`, dir);
    }

    if (repo.build) {
        console.log(`\n== Building ${repo.name} ==`);
        sh("npm run build", dir);
    }
}

console.log(`\n== Installing brainpad-pulse dependencies ==`);
sh("npm install --no-audit --no-fund");

for (const repo of PINNED_REPOS) {
    console.log(`\n== Linking ${repo.name} into this project ==`);
    sh(`npx pxt link ../${repo.name}`);
}

console.log(`\n== Setup complete ==`);
console.log(`Next:  npm run dev   (local editor at http://localhost:3232/)`);
console.log(`Then:  npm run build   or   npm run deploy`);
