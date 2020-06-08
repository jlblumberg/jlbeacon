### jlbeacon

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4880046-11b5-4b4e-b33b-3951d6e7be0f/deploy-status)](https://app.netlify.com/sites/covid-19-data-viz/deploys)

[Outline](#Outline) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Example use](#Example_use) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

A web app, built to try to secure an interview at [Beacon](https://beacon.com/). It allows users to find the best (fasted) sea-route for shipping freight between two lat-long coordinates. The app makes use of a private API called [Searoutes](searoutesAPI.com) to get the routing data. You can view the live site [here](https://covid-19-data-viz.netlify.app/).

## <a name="Installation_Instructions">Installation Instructions</a>

### Prerequisite setup:
- Clone this repo to your local machine and cd into it
- Run `npm install` to install the necessary dependencies

### Running the site

Development:
- Run the server with command `npm start`
- Visit `http://localhost:3000` to use the site

Production:
- View the live site [here](https://covid-19-data-viz.netlify.app/)

### Testing
- All tests can be run with command `npm test`

## <a name="Tech_stack">Tech stack</a>

Front-end:
- JavaScript
- React (bootstrapped with Create React App)
- HTML & CSS
- Material UI

Testing:
- Jest, Enzyme

Data:
- https://discover.searoutes.com/

## <a name="Example_use">Example use</a>

TBC

## <a name="Future_work">Future work</a>

TBC