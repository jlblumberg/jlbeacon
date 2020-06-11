### jlbeacon

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2c45712-8c74-4356-a884-8da15460419b/deploy-status)](https://app.netlify.com/sites/jlbeacon/deploys)

[Outline](#Outline) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

A web app built to prove my commitment to securing an interview at [Beacon](https://beacon.com/). It allows users to find information about sea-routes between two lat-long coordinates, relevant to Beacon's work in freight forwarding. The app makes use of an API called [Searoutes](searoutesAPI.com) to get the routing data. You can view the live site [here](https://jlbeacon.netlify.app/).

## <a name="Installation_Instructions">Installation Instructions</a>

### Prerequisite setup:
- Clone this repo to your local machine and cd into it
- Run `npm install` to install the necessary dependencies
- Get an API key from [Searoutes](https://discover.searoutes.com/)
- Make a .env file (with the command `touch .env`) and add your key to it (`REACT_APP_SEA_API_KEY=your-api-key-here`)

### Running the site

Development:
- Run the server with command `npm start`
- Visit `http://localhost:3000` to use the site

Production:
- View the live site [here](https://jlbeacon.netlify.app/)

### Testing
- All tests can be run with command `npm test`

## <a name="Tech_stack">Tech stack</a>

Front-end:
- JavaScript
- React (bootstrapped with Create React App)
- HTML & CSS
- [Material UI](https://material-ui.com/)

Testing:
- Jest, Enzyme

Data:
- [Searoutes API](https://discover.searoutes.com/)

## <a name="Future_work">Future work</a>

Going forward, I'd like to continue working on the following:
- Amend CSS to better handle mobile screens
- Add an 'about' component
- Fix transit duration bug (awaiting reply from API provider)
