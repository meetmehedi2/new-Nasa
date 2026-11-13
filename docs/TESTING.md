# Testing and build

Run these commands from the repository root:

```bash
npm ci
npm test
npm run lint
npm run build
```

- `npm test` runs the browser simulation checks.
- `npm run lint` checks application source, tests, and Vite configuration.
- `npm run build` type-checks the TypeScript project and creates the production bundle in `dist/`.

The production build may report a large JavaScript chunk because the browser app includes interactive 3D and mission content. This warning does not indicate a failed build.

## Manual judging-flow review

Before recording, verify the campaign map, one mission briefing/decision/debrief, a Moon or Mars survival scenario, all five Learning Hub options (video, audio, comic, handwritten notes, and gameplay), the NASA Live Observatory, image search, and the Moonquake Map. Also check desktop and mobile layouts. The automated tests do not replace this visual review.
