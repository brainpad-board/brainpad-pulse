# BrainPad for Microsoft MakeCode

A [Microsoft MakeCode](https://makecode.com) target for the GHI Electronics
**BrainPad Pulse** — a blocks + JavaScript code editor for an educational
STEM microcontroller.

**Live editor:** https://makecode.brainpad.com/

---

## For users

Just open [makecode.brainpad.com](https://makecode.brainpad.com/) in a modern
browser. No install needed. Code with blocks or JavaScript, run in the
simulator, download to a physical BrainPad over USB.

## For contributors

### Prerequisites

- **Node.js 16.x** — pinned in [`.nvmrc`](.nvmrc). If you use
  [nvm](https://github.com/nvm-sh/nvm) or
  [nvm-windows](https://github.com/coreybutler/nvm-windows), run `nvm use`
  from this directory.
- **git**
- **pxt CLI** — `npm install -g pxt@7.3.7`
- **Native toolchain** (only needed to build the device firmware — the simulator
  works without it):
  - `arm-none-eabi-gcc` 8.x or newer
  - `ninja`
  - `cmake` 3.x
  - Python 3

### Setup (one time)

```bash
npm run setup
```

This clones [microsoft/pxt@v7.3.7](https://github.com/microsoft/pxt) and
[microsoft/pxt-common-packages@v9.3.11](https://github.com/microsoft/pxt-common-packages)
into sibling directories (`../pxt` and `../pxt-common-packages`), pins a couple
of type packages that modern npm otherwise resolves to breaking versions,
builds pxt-core, and links everything into this project.

### Daily development

```bash
npm run dev     # Serves the editor at http://localhost:3232/
npm run build   # Produces the deployable static site in built/packaged/brainpad-pulse/
npm run clean   # Removes build artifacts (keeps node_modules + sibling repos)
npm run deploy  # Builds and publishes to the gh-pages branch (requires push access)
```

### Deploying from CI

Pushes to `master` do **not** trigger an auto-deploy by default. To deploy,
either run `npm run deploy` locally, or trigger the
[Deploy to GitHub Pages](../../actions/workflows/deploy.yml) workflow manually
from the Actions tab.

To enable auto-deploy on every push to `master`, uncomment the `push:` trigger
in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Project layout

```
.
├── .github/workflows/   # CI (deploy to gh-pages)
├── docs/                # markdown + tutorials shown inside the editor
├── editor/              # extension that patches the editor UI for this target
├── libs/                # TypeScript APIs exposed to user code (buttons, display, ...)
├── sim/                 # browser-side simulator for libs/
├── theme/               # Semantic UI theme overrides
├── scripts/             # npm run <setup|build|clean|deploy> implementations
├── tools/legacy/        # old doOverwrite .exe + C# source, kept for reference
├── pxtarget.json        # top-level target config (board, bundled libs, theme)
├── targetconfig.json    # ship-approved extensions and gallery entries
└── package.json         # pinned pxt-core / pxt-common-packages versions
```

## Related projects

- [microsoft/pxt](https://github.com/microsoft/pxt) — the editor engine
  (pxt-core). We pin `v7.3.7`.
- [microsoft/pxt-common-packages](https://github.com/microsoft/pxt-common-packages)
  — shared libraries (base, game, screen, buttons, ...). We pin `v9.3.11`.
- [brainpad-board/codal-brainpad](https://github.com/brainpad-board/codal-brainpad)
  — the C/C++ runtime on the device itself.

## Why the deploy script writes CNAME

GitHub Pages reads the `CNAME` file at the root of `gh-pages` to know which
custom domain to serve this site at. If a deploy ever lands on `gh-pages`
without a `CNAME` file, GitHub Pages un-registers the custom-domain mapping
for the repo. Re-registering it then requires an org-level domain
verification (one-time, already done for `brainpad.com`).

`scripts/deploy.mjs` writes `CNAME` on every single deploy. **Do not
"optimize" this away.** If someone deploys manually in the future, they
should use `npm run deploy` and not reinvent the push.

## License

MIT. See [LICENSE](LICENSE).

## Code of Conduct

This project adopts the
[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For questions, email
[opencode@microsoft.com](mailto:opencode@microsoft.com).
