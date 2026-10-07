#!/usr/bin/env node
// Builds the editor and publishes it to the gh-pages branch for custom-domain
// hosting at https://makecode.brainpad.com/.
//
// The flow is intentionally boring so no step can be forgotten:
//   1. `npm run build` (pxt staticpkg + post-build rewrites)
//   2. Fetch latest gh-pages and set up a git worktree
//   3. Clear the worktree (keeping only .git)
//   4. Copy the fresh build in
//   5. Write CNAME (makecode.brainpad.com) and restore .gitattributes
//   6. Commit (as the git user already configured) and push origin gh-pages
//
// The CNAME write in step 5 is the single most important line in this file.
// It is the step that was tribal knowledge in the old doOverwrite pipeline
// and it's what caused the Oct 2026 outage — see README.
//
// Usage:
//   npm run deploy

import { execSync } from "node:child_process";
import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

const CUSTOM_DOMAIN = "makecode.brainpad.com";
const PACKAGED_DIR = "built/packaged/brainpad-pulse";
const WORKTREE_DIR = ".gh-pages-worktree";
const BRANCH = "gh-pages";
const REMOTE = "origin";

const GITATTRIBUTES = `# enforce unix style line endings
*.ts text eol=lf
*.tsx text eol=lf
*.md text eol=lf
*.txt text eol=lf
*.js text eol=lf
*.json text eol=lf
*.xml text eol=lf
*.svg text eol=lf
*.yaml text eol=lf
*.css text eol=lf
*.html text eol=lf
*.py text eol=lf
*.exp text eol=lf
*.manifest text eol=lf

# do not enforce text for everything - it causes issues with random binary files

*.sln text eol=crlf

*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
`;

const projectDir = process.cwd();
const packagedPath = resolve(projectDir, PACKAGED_DIR);
const worktreePath = resolve(projectDir, WORKTREE_DIR);

function sh(cmd, cwd = projectDir) {
    console.log(`\n$ ${cmd}  (cwd: ${cwd})`);
    execSync(cmd, { cwd, stdio: "inherit" });
}

function shQuiet(cmd, cwd = projectDir) {
    return execSync(cmd, { cwd, encoding: "utf8" }).trim();
}

// Step 1: Build.
console.log("== 1/6 Building ==");
sh("npm run build");

if (!existsSync(packagedPath)) {
    console.error(`\nERROR: build output not found at ${packagedPath}`);
    process.exit(1);
}

// Step 2: Worktree.
console.log("\n== 2/6 Preparing gh-pages worktree ==");
sh(`git fetch ${REMOTE} ${BRANCH}`);

if (existsSync(worktreePath)) {
    console.log(`Worktree exists at ${worktreePath}; resetting to ${REMOTE}/${BRANCH}`);
    sh(`git reset --hard ${REMOTE}/${BRANCH}`, worktreePath);
    sh(`git clean -fdx`, worktreePath);
} else {
    sh(`git worktree add ${WORKTREE_DIR} ${BRANCH}`);
}

// Step 3: Clear worktree (preserve .git).
console.log("\n== 3/6 Clearing old worktree contents ==");
for (const entry of await readdir(worktreePath)) {
    if (entry === ".git") continue;
    await rm(join(worktreePath, entry), { recursive: true, force: true });
}

// Step 4: Copy fresh build in.
console.log("\n== 4/6 Copying new build into worktree ==");
for (const entry of await readdir(packagedPath)) {
    await cp(
        join(packagedPath, entry),
        join(worktreePath, entry),
        { recursive: true, force: true }
    );
}

// Step 5: Write CNAME + .gitattributes. THIS IS THE CRITICAL STEP.
console.log("\n== 5/6 Writing CNAME and .gitattributes ==");
await writeFile(join(worktreePath, "CNAME"), CUSTOM_DOMAIN, "utf8");
await writeFile(join(worktreePath, ".gitattributes"), GITATTRIBUTES, "utf8");
console.log(`  wrote  CNAME (${CUSTOM_DOMAIN})`);
console.log(`  wrote  .gitattributes`);

// Step 6: Commit and push.
console.log("\n== 6/6 Committing and pushing ==");
sh("git add -A", worktreePath);

const sourceSha = shQuiet("git rev-parse --short HEAD");
const sourceBranch = shQuiet("git rev-parse --abbrev-ref HEAD");
const message = `Deploy from ${sourceBranch}@${sourceSha}`;

try {
    sh(`git commit -m "${message}"`, worktreePath);
} catch {
    console.log("No changes to commit — gh-pages already up to date with this build.");
    process.exit(0);
}

sh(`git push ${REMOTE} ${BRANCH}`, worktreePath);

console.log(`\n== Deployed ==`);
console.log(`Site will be live at https://${CUSTOM_DOMAIN}/ within ~1-2 minutes.`);
