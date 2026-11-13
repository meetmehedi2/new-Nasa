# Science and Data Sources

Jr_AstroCamp is an educational project that combines live web APIs, bundled and curated reference content, and simplified simulation values. The game does not provide operational guidance or full-fidelity NASA telemetry.

## Live data feeds

- [NASA APOD API](https://api.nasa.gov/planetary/apod): daily astronomy image and explanation.
- [NASA NeoWs feed](https://api.nasa.gov/neo/rest/v1/feed): near-Earth-object approaches for the current day.
- [NASA Image and Video Library](https://images.nasa.gov/): image search in the image-library feature.
- [Where the ISS at API](https://api.wheretheiss.at/v1/satellites/25544): third-party live ISS position service, not an agency feed.

NASA API requests use NASA's public `DEMO_KEY` unless a key is configured. API-dependent features may show bundled fallback content when requests are unavailable.

## Bundled reference content

- The TypeScript catalog contains manually curated historical mission summaries used in the browser Learning Hub and campaign. It is not a live import from [NASA NSSDC](https://nssdc.gsfc.nasa.gov/nmc/).
- The Moonquake Map reads a small static JSON file labeled Nakamura (1979), with the [Apollo Passive Seismic Experiment archive](https://pds-geosciences.wustl.edu/missions/apollo/pse.htm) as its reference.
- The outpost and survival scenarios cite sources such as NASA's [BVAD report](https://ntrs.nasa.gov/citations/20150002905), [DONKI](https://kauai.ccmc.gsfc.nasa.gov/DONKI/), and PDS archives for [LRO LOLA](https://pds-geosciences.wustl.edu/missions/lro/lola.htm), [MSL REMS](https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/MARS/curiosity/rems.html), and [MGS MOLA](https://pds-geosciences.wustl.edu/missions/mgs/mola.html). These are reference links; the app does not download those raw datasets for the scenarios.

## Limitations

Mission profiles, resource rates, hazards, and outcomes are selectively simplified or time-compressed for gameplay. Bundled content and API fallbacks may be static. Do not describe the simulations as live telemetry, operational flight software, or a full implementation of the cited scientific datasets.

For the concise submission attribution list, see [NASA_DATA_ATTRIBUTION.md](../NASA_DATA_ATTRIBUTION.md).
