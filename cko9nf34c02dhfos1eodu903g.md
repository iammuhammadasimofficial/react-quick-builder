---
title: "How to Manage Multiple ReactJs Environments"
seoTitle: "How to manage multiple environments in ReactJS"
seoDescription: "This article will help you how to manage multiple environments in your ReactJs application."
datePublished: Sun May 02 2021 06:23:06 GMT+0000 (Coordinated Universal Time)
cuid: cko9nf34c02dhfos1eodu903g
slug: how-to-manage-multiple-reactjs-environments
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1620102947880/KHnczs8TW.png
tags: javascript, reactjs, javascript-library, create-react-app, reacthooks

---

When start working with ReactJs application, it can be easily created by running **npx create-react-app <app-name>** command. ReactJs provides few commands with the initial creation of the application under the **scripts ** object, which can be used to run or test the ReactJs application. These commands can be viewable in the package.json file of the root directory for the project.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
``` 

## Use Case Scenario 
Let's explain further by taking a use case as an example.
Suppose you have a ReactJs application that would be running on multiple environments and multiple servers and each environment would have its configuration. But with default commands provided by ReactJs, you can only use two environments. 

- **Development Environment** When you run the **npm start** command, the application will run in the **development** environment and it will use .env.development by default if it's available.
- **Production Environment** When you run the **npm run build** command, the production build will be created and it will use .env.production by default if available.

So it means the application could only be run in two environments. Suppose if there are more environments in your ReactJs application like

- Development or Local
- Testing or QA 
- Staging
- Production

Then how would you manage that? Each environment could have its link and configurations. It could not be managed by the existing commands. There can be multiple solutions for that, but we will be discussing the best two simple and easy solutions in this article.

## Solution 1 - Manage Environment by .env files
Suppose we have different API URLs for each environment and we have to use them accordingly. To achieve this we will create a separate file for each environment.

**Note**: When creating custom environment variables in .env files, the variable must have the prefix REACT_APP otherwise the variables will not be accessible in the application.

- **.env.development**
```
REACT_APP_API_URL="https://reactapp.dev.com"
``` 
- **.env.qa**
```
REACT_APP_API_URL="https://reactapp.qa.com"
```
- **.env.stage**
```
REACT_APP_API_URL='https://reactapp.stage.com'
```
- **.env.production**
```
REACT_APP_API_URL='https://reactapp.prod.com'
```

After creating .env files for each environment, the next step is to make changes in the "scripts" object in the package.json file.
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "dev" : "env-cmd -f .env.development npm start",
    "qa" : "env-cmd -f .env.qa npm run build",
    "stage" : "env-cmd -f .env.stage npm run build",
    "prod" : "env-cmd -f .env.production npm run build",
  }
```
We used [env-cmd](https://www.npmjs.com/package/env-cmd) in our commands to read the environment variables from a given environment file. env-cmd is a node library that provides the facility to read environment variables from given environment files.
In the above commands **env-cmd -f .env.<name>** is present in each line. **env-cmd** included so we can read the environment variables, **-f** is used t define the path of the environment file and then the name of the environment file.

```
// run the application in a development environment
npm run dev

// run the application in a testing environment
npm run QA

// run the application in a staging environment
npm run stage

// run the application in a production environment
npm run prod
``` 
Now you can access **REACT_APP_API_URL** anywhere in your ReactJs application by using ***process.env.REACT_APP_API_URL*** statement.

## Solution 2 - Managing Environment using config file
Following the same use case, the other solution to manage multiple environments is to create a config.js file and set environment variables in commands. The config.js file would get the environment of the application and return the API URL according to that.

Commands for different environments
```
// for windows
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "dev" : "SET REACT_APP_API_URL='development' && npm start",
    "qa" : "SET REACT_APP_API_URL='qa' && npm run build",
    "stage" : "SET REACT_APP_API_URL='stage' && npm run build",
    "prod" : "SET REACT_APP_API_URL='production' && npm run build",
  }

// for linux/mac
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "dev" : "REACT_APP_ENV='development' npm start",
    "qa" : "REACT_APP_ENV='qa' npm run build",
    "stage" : "REACT_APP_ENV='stage' npm run build",
    "prod" : "REACT_APP_ENV='production' npm run build",
  }
``` 
Now we will create a config.js file and return the API URL according to the current environment

```
// API URL for development environment
const dev = {
     API_URL="https://reactapp.dev.com"
}

// API URL for testing environment
const qa= {
     API_URL="https://reactapp.qa.com"
}

// API URL for staging environment
const stage= {
     API_URL="https://reactapp.stage.com"
}

// API URL for production environment
const prod= {
     API_URL="https://reactapp.prod.com"
}

const environment = process.env.REACT_APP_ENV
export default environment === 'development' ? dev : environment === 'qa' ? qa : environment === 'stage' ? stage : prod
``` 

Now, whenever you want to use the API URL you can simply call the configuration and URL object from it.

```
import config from config

// the URL will be returned according to the environment
const fetchData = () => {
    const apiUrl = config.url
}
``` 

## Thanks for reading this article
I hope this article would help the ReactJs developers to solve their problems regarding multiple environment management in the ReactJs application.  If you enjoy reading this article like share, and comment.






