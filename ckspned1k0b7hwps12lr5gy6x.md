---
title: "How to make Redux Store/State Persistent?"
seoTitle: "How to make Redux Store persistent?"
seoDescription: "Use Localstorage to make the redux store/state persistent in easy steps"
datePublished: Mon Aug 23 2021 05:47:25 GMT+0000 (Coordinated Universal Time)
cuid: ckspned1k0b7hwps12lr5gy6x
slug: how-to-make-redux-store-persistent
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1629716017304/6Y81sW33h.png
tags: reactjs, redux, state, props, reacthooks

---

As a react developer, you must be aware that, when working with react-redux, the redux store data would go to its initial state upon refreshing the page. It means all the stored data in the redux before refreshing the page would go to its initial state.<br/>
The application might need some redux store data to be persistent for a smooth flow across the application. <br/>
It's a good contribution towards the interactive application with a better user experience by making redux store data persistent. The application does not go to the initial level of the redux store each time if the required data or the whole redux store, depending upon the requirements, is being saved in localstorage.<br/>
Let's take an example. There is a react application which is using react-redux to use the state data across different components. That application has Theme Settings that are in one of the redux states. If the user changes any Theme Settings, that should be applied across the application with updated settings.<br/>

In this article, I m taking an example to update the theme settings which would have headerColor, primaryColor and footerColor.

**Let's start
**
## Step 1. Create a file for helper functions
Creating this file with two methods to store the theme setting redux state in localstorage and get the stored theme setting from localstorage.
```
//helpers/persistentData.js

/**
 * function to store single state in local storage
 */
export const saveState = (state, data) => {
    try {
        // stringify the data as localstorage accepts string type data
        const serializedState = JSON.stringify(data)
        localStorage.setItem(state, serializedState)
    } catch {
        // ignore write errors
    }
}
/**
 * function to get single persistent state from localstorage
 */
export const loadState = (state) => {
    try {
      const serializedState = localStorage.getItem(state)
      if (serializedState === null) {
        return undefined
      }
      // parsing the stringify data
      return JSON.parse(serializedState)
    } catch (err) {
      return undefined
    }
}
``` 

## Step 2. Create Reducer for theme settings
Now, I m creating a reducer for theme settings and we will be getting the persistent data from **loadState** method and pass it to the initial state of the reducer.<br/>
**Note:** When the application is running for the first time, localstorage does not contain any data so to handle that I will be setting some default values.


```
// redux/reducers/themeReducer.js
import { loadState } from "./helpers/persistentData";

const themeDefaultState = loadState("themeSettings") ? loadState("themeSettings") : {headerColor: "#39ffff", primaryColor: "#ffffff", footerColor: "#65g5f8"}

/**
 * Reducer function to return the data on the basis of conditions
 */
const themeReducer = (state = themeDefaultState , action) => {
    switch (action.type) {
        case 'SET_HEADER_COLOR':
            return {...state , headerColor: action.payload }
        case 'SET_PRIMARY_COLOR':
            return {...state , primaryColor: action.payload }
            case 'SET_FOOTER_COLOR':
                return {...state , footerColor: action.payload }
        default:
            return state;
    }
}

export default themeReducer 
``` 

## Step 3. Create Redux Store
In this step, I will create a redux store and declare the reducers.

```
// redux/store.js
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import themeReducer from "./reducers/themeReducer "

/**
 * Function to create a store with including reducers here
 */
const store = () => {
    return createStore(
        combineReducers({
            themeSettings: themeReducer,
            ...
            ...
        }),
        compose(applyMiddleware(thunk))
    )
}

export default store
``` 

## Step 4. Create Actions to dispatch
Creating actions method to pass the color data according to the type to the reducers to save it in redux

```
// redux/actions/themeActions.js
/**
 * Action to set header color
 * @returns 
 */
export const setHeaderColor= (color) =>{
    
    return{
        type: 'SET_HEADER_COLOR',
        payload: color
    }
}

/**
 * Action to set primary color
 * @returns 
 */
 export const setPrimaryColor= (color) =>{
    
    return{
        type: 'SET_PRIMARY_COLOR',
        payload: color
    }
}

/**
 * Action to set footer color
 * @returns 
 */
 export const setFooterColor= (color) =>{
    
    return{
        type: 'SET_FOOTER_COLOR',
        payload: color
    }
}
``` 

## Step 5. store.subscribe()
subscribe() can be used to update the UI in response to state changes. subscribe() is like a watcher who is monitoring the state changes. If any required operation is required to be performed while any redux state changed, it can be used.
It can also be handy to persist the current state in the localStorage.
I using subscribe() to catch the changes made in redux state and then store those changes to localstorage to make it persistent. I m also using throttling here so that the application performance could not be minimized. 

```
// index.js

// to make redux state presistent (used loadash throttle to avoid performance issue)
store.subscribe(throttle(() => {
  // persisting theme settings state
  saveState("themeSettings", store.getState().themeSettings)
}, 1000))
``` 

Now, whenever the user made changes to headerColor, primaryColor or footerColor, they would be stored in redux, and on every state change, it would be saving in localstorage. And if the user closes the application or refreshes the browser the changes will be there and reflecting because I used **loadState ** helper method in reducer to initialize the default state, which will be having the user change in localstorage.

# Thanks for reading this article

I hope this article would help the ReactJs developers to solve their problems regarding the persistent redux state in ReactJs applications. It would be very easy to implement the persistent functionality without creating any ripple effect in your existing code to make the required data persistent. <br/>
If you enjoy reading this article like share, and comment.




