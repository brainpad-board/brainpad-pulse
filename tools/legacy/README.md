# Legacy build tools

Everything in this folder is **superseded** and kept only for historical reference.

## OverwritePxtOutput.exe + OverwritePxtOutput/

C# command-line tool that used to post-process the output of
`pxt staticpkg --githubpages`. It had two modes:

- **Option 0:** rewrote PXT's default blockly tab color + app background class
  to the BrainPad orange variants.
- **Option 1:** stripped the `/brainpad-pulse/` deploy prefix, redirected
  `static/` references to `docs/static/`, injected the Google Analytics
  snippet, and (commented-out) fixed the favicon reference.

Both passes have been ported 1:1 to [`scripts/post-build.mjs`](../../scripts/post-build.mjs)
and run automatically as part of `npm run build`. The Node.js port is:
- Cross-platform (no .exe, no .NET SDK, no Visual Studio needed to modify)
- Readable (no binary blob in the repo)
- Not a human-forgettable step (chained to the build)

**Do not resurrect the .exe.** If you need to adjust what post-processing does,
edit `scripts/post-build.mjs`.
