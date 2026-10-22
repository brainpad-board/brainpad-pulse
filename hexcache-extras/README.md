# Pre-cached hex files for extensions

Each `.hex` file in this folder is a pre-compiled binary for a specific
program shape. The filename is a SHA256 fingerprint of the compiled C++
code — browsers look up a hex file by its fingerprint when the user clicks
the Download button in the editor.

If the user's program compiles to a fingerprint that exists here, download
works instantly from this cache. If it doesn't, PXT falls back to a cloud
compile service — which is **not available for brainpad** anymore, so the
download fails with "The hex file is not available".

## What's in here

Hex files for the common extensions:
NeoPixel, Infrared, Sonar, Game, Music, BrainBot, BrainGamer, Buttons,
Display, Settings. Each extension has at least one program variant
pre-compiled so students writing tutorials-style code can download without
hitting the cloud fallback.

## How these get into deploys

`scripts/post-build.mjs` copies every `.hex` here into the final
`built/packaged/brainpad-pulse/hexcache/` just before deploy. So every push
to gh-pages via `npm run deploy` includes them — no manual step.

## When to regenerate

Any time the toolchain changes (pxt-core version, pxt-common-packages
version, codal version, the GCC version on the build machine), these
fingerprints become stale and will no longer match what the browser
computes. Run `npm run harvest-hexes` to re-generate.

## Adding support for more extensions

Edit the `HARVEST_PROGRAMS` list in [`scripts/harvest-hexes.mjs`](../scripts/harvest-hexes.mjs),
add an entry for the extension you want to pre-cache, then run `npm run harvest-hexes`.
Commit the new `.hex` files that appear here.
