#!/usr/bin/env node
// Post-processes the output of `pxt staticpkg` so it can be deployed to
// https://makecode.brainpad.com/ (a custom-domain root), not the GitHub
// Pages subpath `/brainpad-pulse/`.
//
// Supersedes tools/OverwritePxtOutput.exe (preserved in tools/legacy/
// for reference). Runs automatically as part of `npm run build`.
//
// What it does, in three passes:
//   1. Color-palette override — rewrites PXT's default blockly tab and
//      app-background color classes to the BrainPad orange variants.
//   2. Deploy-path rewrite — strips the `/brainpad-pulse/` prefix that
//      `pxt staticpkg --route brainpad-pulse` bakes in, replaces it with
//      `/` for custom-domain root hosting. Also redirects `static/`
//      references to `docs/static/` where the images actually live.
//   3. index.html patches — restore the favicon reference (PXT emits
//      an empty href) and inject the Google Analytics snippet.

import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const DEFAULT_INPUT_DIR = "built/packaged/brainpad-pulse";

const GA_TRACKING_ID = "G-WWZF1Q6WT0";
const FAVICON_HREF = "docs/static/icons/favicon.ico";

const GA_SNIPPET = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
<script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', '${GA_TRACKING_ID}');
</script>
`;

const VIEWPORT_META = '<meta name="viewport" content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">';
const EMPTY_FAVICON_LINK = '<link rel="shortcut icon" href="">';

async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) {
            yield* walk(path);
        } else {
            yield path;
        }
    }
}

function recolorBlocklyTheme(text) {
    return text
        .replaceAll("selectedColor:3", "selectedColor:1")
        .replaceAll("x-mkcd-f4", "x-mkcd-f1");
}

function stripDeployPrefix(text) {
    return text
        .replaceAll("/brainpad-pulse/", "/")
        .replaceAll('"static/', '"docs/static/')
        .replaceAll('"/static/', '"docs/static/')
        .replaceAll("(../static/", "(docs/static/");
}

function patchIndexHtml(text) {
    let out = text;

    out = out.replaceAll(
        EMPTY_FAVICON_LINK,
        `<link rel="shortcut icon" href="${FAVICON_HREF}">`
    );

    if (!out.includes(GA_TRACKING_ID)) {
        out = out.replace(VIEWPORT_META, VIEWPORT_META + "\n" + GA_SNIPPET);
    }

    return out;
}

async function processFile(path) {
    let original;
    try {
        original = await readFile(path, "utf8");
    } catch {
        // Binary files or anything unreadable as utf8 — skip.
        // Matches the C# tool's behavior (string replace is a no-op on binaries).
        return false;
    }

    let updated = original;
    if (extname(path) === ".js") {
        updated = recolorBlocklyTheme(updated);
    }
    updated = stripDeployPrefix(updated);
    if (path.endsWith("index.html")) {
        updated = patchIndexHtml(updated);
    }

    if (updated === original) return false;
    await writeFile(path, updated, "utf8");
    return true;
}

const inputDir = process.argv[2] ?? DEFAULT_INPUT_DIR;

try {
    const info = await stat(inputDir);
    if (!info.isDirectory()) throw new Error("not a directory");
} catch {
    console.error(`post-build: input directory not found: ${inputDir}`);
    console.error("run `pxt staticpkg --route brainpad-pulse` first.");
    process.exit(1);
}

let changed = 0;
for await (const path of walk(inputDir)) {
    if (await processFile(path)) changed++;
}

console.log(`post-build: rewrote ${changed} file(s) under ${inputDir}`);
