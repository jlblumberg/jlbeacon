### jlbeacon

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2c45712-8c74-4356-a884-8da15460419b/deploy-status)](https://app.netlify.com/sites/jlbeacon/deploys)

[Outline](#Outline) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Example use](#Example_use) | [Future work](#Future_work)

:construction: **19/06/2020 update:** :construction:
> Unfortunately, the Searoutes API which this project made use of is not free, and my free trial has ended. This means the site won't do the cool things that it used to do. That said, I'd still love for you to have a click around and view the source code. 

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

## <a name="Example_use">Example use</a>

Desktop experience:

![desktop](https://user-images.githubusercontent.com/56274153/84778043-4e52c500-afda-11ea-8ca5-1255a2f86505.gif)

Mobile experience:

![mobile](https://user-images.githubusercontent.com/56274153/84778256-a5589a00-afda-11ea-849d-63cd1581f8e2.gif)

## <a name="Future_work">Future work</a>

Going forward, I'd like to continue working on the following:
- Add an 'about' component
- Add error handling to UI
