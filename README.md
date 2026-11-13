# Jr_AstroCamp — Fly. Learn. Explore.

**NASA International Space Apps Challenge 2026 · Team Mysterio**

Jr_AstroCamp is a browser-based space STEM learning platform. Students explore a catalog of 76 historical NASA mission profiles, make decisions in interactive mission and outpost scenarios, then revisit the outcomes through multiple learning formats.

## What the browser app includes

- **Mission campaign:** 76 curated historical mission profiles across launch, docking, landing, rover, telescope, and deep-space challenges, with briefings and debriefs.
- **Moon and Mars survival:** Four educational scenarios—two lunar and two Martian—where students manage oxygen, water, food, and power.
- **Five ways to learn:** Gameplay, short video lessons, audio lessons, comics, and handwritten-style notes.
- **NASA science tools:** A Live Observatory with APOD and NeoWs, image search through NASA's Image and Video Library, and an Apollo Moonquake Map.
- **Local CapCom helper:** Uses authored notes and local response rules; student questions are not sent to an external AI service.

NASA references inform the scenarios, but game values are simplified for learning. The app does not present them as raw telemetry or live environmental feeds. The Moonquake Map plots bundled Apollo seismic-event references; its animated waveform is illustrative, not recorded telemetry. See [NASA_DATA_ATTRIBUTION.md](./NASA_DATA_ATTRIBUTION.md) for sources and caveats.

## Run locally

Requirements: Node.js 22 or newer and npm.

```bash
git clone https://github.com/meetmehedi2/new-Nasa.git
cd new-Nasa
npm ci
npm run dev
```

Open the local URL printed by Vite. The optional teacher-gradebook endpoint can be configured through `.env`; start from [`.env.example`](./.env.example). Its value is bundled into browser code, so do not put credentials or private data there. The demo authentication flow is not suitable for real student accounts or sensitive information.

## Tests and build

```bash
npm test
npm run lint
npm run build
```

`npm test` runs the browser simulation checks. `npm run build` type-checks the TypeScript project and creates the production bundle in `dist/`. Vite may report a large-bundle warning because the app includes interactive 3D and mission content.

## NASA sources and attribution

The app combines a bundled historical mission catalog, authored educational scenarios informed by NASA references, and separate public NASA feeds for APOD, NeoWs, and image search. It does not claim that every simulation value comes from a live NASA feed. Review [NASA_DATA_ATTRIBUTION.md](./NASA_DATA_ATTRIBUTION.md) and [docs/SCIENCE_AND_DATA_SOURCES.md](./docs/SCIENCE_AND_DATA_SOURCES.md) for details.

## Deployment

The repository includes a GitHub Actions workflow for GitHub Pages. Set the Pages source to **GitHub Actions** and keep the Vite base path in `vite.config.ts` aligned with the repository name, `new-Nasa`.
