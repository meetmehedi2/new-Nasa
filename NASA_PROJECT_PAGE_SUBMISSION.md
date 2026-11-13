# NASA Space Apps Challenge Project Summary

**Project:** Jr_AstroCamp: Fly. Learn. Explore.
**Challenge:** [Build a Junior Astronaut Mission Trainer](https://www.spaceappschallenge.org/2026/challenges/build-a-junior-astronaut-mission-trainer/)
**Team:** Team Mysterio
**Repository:** [meetmehedi2/new-Nasa](https://github.com/meetmehedi2/new-Nasa)

## Summary

Jr_AstroCamp is a browser-based space STEM learning platform built with React and TypeScript. Students explore 76 curated historical NASA mission profiles, make decisions in interactive flight and outpost scenarios, and review the consequences through briefings and debriefs.

The browser app includes four Moon and Mars survival scenarios where students manage oxygen, water, food, and power. Its Learning Hub offers gameplay, short videos, audio lessons, comics, and handwritten-style notes. NASA's APOD and NeoWs feeds, NASA Image and Video Library search, and an Apollo Moonquake Map add science context.

## Science and limitations

NASA references inform educational scenarios, but their values are simplified for gameplay. Most scenario values are not raw telemetry or live environmental feeds. The Moonquake Map plots bundled Apollo seismic-event references; its animated waveform is illustrative, not recorded telemetry. The local CapCom helper uses authored notes and response rules and does not send student questions to an external AI service.

See [`NASA_DATA_ATTRIBUTION.md`](./NASA_DATA_ATTRIBUTION.md) and [`docs/SCIENCE_AND_DATA_SOURCES.md`](./docs/SCIENCE_AND_DATA_SOURCES.md) for source links and details.

## Technology

- **Browser app:** React, TypeScript, Vite, and Three.js.
- **Mission content:** Curated TypeScript mission and scenario data.
- **Live context:** Public NASA APIs for APOD, NeoWs, and image search.

The repository does not contain published demo-video URLs. Add final video links and confirm the team roster and required disclosures on the official challenge project page.
