## Table of Contents

- [App Description](#app-description)
- [Questions, Comments, Concerns](#questions-feedback)
- [Dependencies and Inspiration](#dependencies-and-inspiration)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
- [Setup and Running Example](#running-example)
- [Live Demo](#live-demo)

## App Description

This is a sample app using next.js and the [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/). An API key, which is free from ProPublica, is required to run this example. 
The final result is an app called [usbilltrack](https://billtrack-gov.herokuapp.com/).

## Questions, Comments, Concerns

Please direct any questions, comments, or concerns to the [issues](https://github.com/NickDelfino/usbilltrack/issues) section of the repo. Thanks for your feedback.

## Dependencies and Inspirations

This project was seeded by [create-next-app](https://github.com/segmentio/create-next-app). For general questions about the setup of next.js and the structure visit the previously linked github.

## Folder Structure

```
billtrack/
  README.md
  package.json
  package-lock.json
  .next/
    bundles, builds, etc...
  src/
    Components/
      Common/
        Section.js
        Spinner.js
      Screens/
        AboutScreen.js
        BillListScreen.js
        BillScreen.js
      ActionItem.js
      BillNav.js
      NotFound.js
      SearchBar.js
      VoteItem.js
    Styles/
      AboutScreen.css
      ActionItem.css
      Bill.css
      BillListStyles.css
      bootstrap.min.css
      NavBar.css
      SearchBar.css
      Section.css
      Spinner.css
  pages/
    index.js
    bill.js
    about.js
  static/
    assets, etc ....
```

## Setup and Running Example

Get an API key from [ProPublica Congress API](https://www.propublica.org/datastore/api/propublica-congress-api).

Replace the "<placeholder>" tag inside BillListScreen and BillScreen with this API key.

Then, to run the project simply clone this repository and navigate into it. 

Run npm install to acquire dependencies. 

Then simply perform the command `npm run dev`.

## Scripts

### `npm run dev`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the app for production to the `.next` folder.<br>

### `npm run start`

Starts the application in production mode. 

This script is made with heroku in mind. There is a port variable that needs to be
specified for it to run. Heroku needs this for deployment.

## Live Demo

To see how these ideas work in practice check out [the site](https://billtrack-gov.herokuapp.com). 
This sample project is its base.  
