#!/usr/bin/env node
// Removes build artifacts from this target. Does NOT touch node_modules or
// the sibling pxt / pxt-common-packages checkouts — for a full reset, delete
// those manually and re-run `npm run setup`.
//
// Usage:
//   npm run clean

import { rm, readdir } from "node:fs/promises";
import { join } from "node:path";

const projectDir = process.cwd();

const PATHS_TO_REMOVE = [
    "built",
    "projects",
    "temp",
    "tmp",
    ".gh-pages-staging",
    ".gh-pages-worktree",
];

const LIB_SUBDIRS_TO_REMOVE = ["built", "_locales"];

async function remove(path) {
    try {
        await rm(path, { recursive: true, force: true });
        console.log(`  removed  ${path}`);
    } catch (err) {
        console.warn(`  skipped  ${path}: ${err.message}`);
    }
}

console.log(`== Cleaning build artifacts in ${projectDir} ==`);

for (const p of PATHS_TO_REMOVE) {
    await remove(join(projectDir, p));
}

try {
    const libs = await readdir(join(projectDir, "libs"), { withFileTypes: true });
    for (const lib of libs) {
        if (!lib.isDirectory()) continue;
        for (const sub of LIB_SUBDIRS_TO_REMOVE) {
            await remove(join(projectDir, "libs", lib.name, sub));
        }
    }
} catch {
    // No libs/ dir — nothing to clean there.
}

console.log("== Clean complete ==");
