# Prerequisites

* Node.js v14.15.5
* NPM 6.14.11

# How to start the application

1. `npm ci`
2. `REACT_APP_MAPBOX_API_ACCESS_TOKEN=<MAPBOX_API_ACCESS_TOKEN> npm start`

# How to recreate the bug

1. Open the application
2. Type anything into the geocoder in the top right e.g. `London` and select any option
3. Selecting an option from the geocoder should lead to a crash

![Bug GIF](https://imgur.com/Uwhp7pF.gif)

# How to fix the bug

In `src/kepler-config.js` modify the `config.mapStyle.topLayerGroups` property's value from `{}` to `{ "label": true }`.