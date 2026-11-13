# Jr_AstroCamp — Data Sources & Attribution

Jr_AstroCamp combines live API responses, bundled reference content, and simplified game values. It is an educational project, not a live telemetry system or a high-fidelity mission simulator.

## NASA APIs used by the app

| Source | Link | How it is used |
| --- | --- | --- |
| Astronomy Picture of the Day (APOD) | [NASA APOD API](https://api.nasa.gov/planetary/apod) | In the **NASA Live Observatory** panel, fills the daily-image card with the image, title, date, copyright credit, and explanation. The image can be opened at its high-resolution URL. A bundled sample is used if the request fails. |
| Near Earth Object Web Service (NeoWs) | [NASA NeoWs feed](https://api.nasa.gov/neo/rest/v1/feed) | In the same panel's **Near-Earth Asteroid Radar**, lists up to six objects from the current day's feed with name, estimated diameter, potentially-hazardous flag, approach date, miss distance, and relative speed. Sample records are used if the feed is unavailable or empty. |
| NASA Image and Video Library | [NASA Image and Video Library](https://images.nasa.gov/) | The **NASA Image Library** modal sends the student's search term to the image API and displays up to 24 matching image records with a thumbnail and descriptive metadata. In views that enable background selection, the student can apply a selected image to the scene. |

## Bundled and curated content

| Content | Link | How it is used |
| --- | --- | --- |
| Apollo Passive Seismic Experiment (PSE) reference | [Apollo PSE archive](https://pds-geosciences.wustl.edu/missions/apollo/pse.htm) | A bundled JSON list of event dates, coordinates, and magnitudes is plotted on the **3D Moonquake Map**. Students can filter by year and select an event; the animated seismograph is generated from its magnitude and is not a recorded waveform. This is static content, not a live PDS query. |
| Historical NASA mission profiles | [NASA NSSDC Master Catalog](https://nssdc.gsfc.nasa.gov/nmc/) | A bundled TypeScript catalog powers the **Learning Hub** and campaign experiences, where students explore curated mission summaries, objectives, and operational guides. It is not a live NSSDC import. |
| Life-support reference values | [NASA BVAD report](https://ntrs.nasa.gov/citations/20150002905) | In the **lunar/Mars outpost simulation**, crew oxygen, water, and food needs inform resource depletion and recycling choices. The game converts these concepts into simplified per-turn percentages and thresholds; it does not read the report at runtime. |
| Mars weather sample values | [MSL REMS archive](https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/MARS/curiosity/rems.html) and [Perseverance MEDA instrument information](https://science.nasa.gov/mission/mars-2020-perseverance/science-instruments/) | The **NASA Live Observatory** displays a fixed Mars-weather sample (temperature, pressure, wind, and conditions) for context. It is not a live REMS/MEDA feed. |
| Lunar terrain reference | [LRO LOLA archive](https://pds-geosciences.wustl.edu/missions/lro/lola.htm) | Referenced for lunar elevation, polar terrain, and lighting concepts in rover/outpost scenarios. The game does not load LOLA elevation grids; its terrain and resource rules are simplified. |
| Lunar water-ice reference | [LCROSS mission results](https://science.nasa.gov/mission/lcross/) | Provides context for the rover's lunar ice-recovery learning scenario. The in-game extraction amount and reward are simplified, not calculated from LCROSS spectra. |
| Solar weather and radiation references | [NASA DONKI](https://kauai.ccmc.gsfc.nasa.gov/DONKI/) and [LRO CRaTER](https://crater.unh.edu/) | Inform the solar-storm and radiation-shelter scenarios. The event timing and dose/shielding values are scripted game inputs; the app does not query DONKI or ingest CRaTER measurements. |
| Mars terrain reference | [MGS MOLA archive](https://pds-geosciences.wustl.edu/missions/mgs/mola.html) | Cited for Mars elevation and landing-site context; no MOLA elevation grid is loaded by the game. |
| Surface power reference | [NASA NTRS KRUSTY records](https://ntrs.nasa.gov/search?q=KRUSTY) | Grounds the outpost's Kilopower option in the NASA/LANL fission-power test program. The game's continuous power output is a simplified gameplay value, not a direct telemetry feed. |

## Other APIs and agency data

- The **NASA Live Observatory** gets ISS latitude, longitude, altitude, and speed from the [Where the ISS at API](https://api.wheretheiss.at/v1/satellites/25544), refreshing the position every 15 seconds. This is a third-party service, not a NASA or partner-agency data feed.
- The project does not currently ingest a separate ESA, JAXA, CSA, or ISRO dataset.
- A Google Sheets / Apps Script endpoint can optionally support the teacher gradebook when configured by the team; it is not required for the local demo.

Some screens also use bundled NASA imagery, educational links, and video embeds. Simulation parameters and outcomes are simplified for play and should not be presented as operational mission data.
