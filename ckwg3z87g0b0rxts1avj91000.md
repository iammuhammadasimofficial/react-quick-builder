---
title: "Top 9 Tips to Optimize the ReactJs Application"
seoTitle: "Top 9 tips to optimize your ReactJS application"
seoDescription: "As we already know that React makes it painless to create interactive UIs."
datePublished: Fri Nov 26 2021 08:14:17 GMT+0000 (Coordinated Universal Time)
cuid: ckwg3z87g0b0rxts1avj91000
slug: top-9-tips-to-optimize-the-reactjs-application
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1637905212279/Mt0lpdUmT.jpeg
tags: optimization, javascript, performance, reactjs, create-react-app

---


> **Note:** This article can be more useful for experienced ReactJs developers.



As we already know that React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Internally, React uses a few smart strategies to reduce the number of expensive DOM tasks required to update the UI. In many applications, using React will result in faster user communication without having to do a lot of work to prepare for efficiency. However, there are a few ways you can speed up your React app.

### 1. The Power of Immutable Data Structures
Immutable data structures don't mean that it's an architecture or a design pattern, but it's a way of writing code. 

In React we use States in our components, and making any change to the state it can cause the component to re-render. Therefore, we have to be careful when changing the state.

An easy way to avoid this problem is to avoid mutating the values ​​we use as states or props. Let's take an example

```
const [words, setWords] = useState() 

handleNewWord = () =>{
/**
*  Obviously this is not a correct way
*/
  words.push("immutable")
  setWords({words: words})
}
``` 
**words** is a reference of setWords and we are pushing new words directly into the **words**.  What's wrong here is we are mutating the state directly and even if the changes happen in the words array, React won’t re-render the UI as it’s the same reference.

It can be easily avoided by using the **spread syntax** provided in >=ES6

```
const [words, setWords] = useState() 

handleNewWord = () =>{
  setWords({...words, 'immutable'})
}
``` 

These are some benefits of using immutable practice

- Reduce memory usage
- Predictability
- Performance
- Mutation Tracking

Additional resources:

- [The Dao of Immutability
](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd#.9g51h5stk)
-  [Immutable Data Structures and JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript#Immutable.js) 
-  [Immutability in JavaScript](http://www.sitepoint.com/immutability-javascript/) 

### 2. Virtualize Long Lists
If your application provides a long list of data (hundreds or thousands of rows), then according to react documentation it is recommended to use a method known as "windowing". This process only provides a small set of your rows at any one time, and can dramatically reduce the time it takes to retrieve parts and the number of DOM nodes created.

 [react-window](https://react-window.vercel.app/#/examples/list/fixed-size) and  [react-virtualized](https://bvaughn.github.io/react-virtualized/#/components/List) are popular windowing libraries. They provide a few reusable components for displaying lists, grids, and table data. 

Let's take an example of rendering a large number of input fields using react-window, react-form-hooks, and react-virtualized-auto-sizer

<iframe src="https://codesandbox.io/embed/react-hook-form-with-react-window-b4j8n?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="React Hook Form - with React window"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 3. Avoid Reconciliation
React maintains an internal representation of the UI by creating a tree-like structure for the entire DOM object in memory called Virtual DOM. Whenever we update status or props change, the component returns elements, and React compares the newly restored items with those previously provided by comparing the visual DOM summary of the new item with the last updated item. In this way, React should only update the modified nodes in React DOM.

The whole process is a response to DOM updates called Reconciliation. Faster than the deception of Real DOM. Even though React is clever enough to update only changed nodes. But when props and state change, re-rendering takes place which takes some time.

So we need to avoid unnecessary re-rendering for such cases.

If you are using Class-based components then you can avoid this by using the following

**1. shouldComponentUpdate**, the lifecycle function, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update


```
shouldComponentUpdate(nextProps, nextState) {
  return true
}
``` 
If you know that in some situations your component doesn’t need to update, you can return false from shouldComponentUpdate instead, to skip the whole rendering process, including calling render() on this component and below.

**2. [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) **. It is equivalent to implementing shouldComponentUpdate() with a shallow comparison of current and previous props and state.

If you are using functional components, then Reconciliation can be easily avoided by implementing memorization in our React components and methods, which we will discuss in point 8.


### 4. Use React Fragment
To avoid additional HTML element wrapper we can use the Fragment tag provided by React without adding an extra node. For  example

```
const MyComponent = () => {
    return (
            <Fragment>
                <h1>Comment Title</h1>
                <p>comments</p>
                <p>comment time</p>
            </Fragment>
     )
}
``` 

There is one more way to do this without using Fragment.

```
const MyComponent = () => {
    return (
            <>
                <h1>Comment Title</h1>
                <p>comments</p>
                <p>comment time</p>
            </>
     )
}
``` 

### 5. Don't Use Inline functions for Props
As we are well aware that functions in JavaScript are objects and in React if the inline function is being used for props then React will not find the difference during the reconciliation process. Also, it will create a new instance of the function on each render if it's used in a JSX property which might create a lot of work for the garbage collector.

```
const MyComponent = () => {
    const [words, setWords] = useState() 

    return (
            <>
                <Button onClick={(e) => setWords({...words, 'immutable'})} >Click Me</Button>
            </>
     )
}
``` 

The best way to avoid this is to use arrow functions instead of defining inline functions for props. 

```
const MyComponent = () => {
    const [words, setWords] = useState() 
    
    handleClick = () =>{
       setWords({...words, 'immutable'}
    }
    return (
            <>
                <Button onClick={handleClick} >Click Me</Button>
            </>
     )
}
``` 

### 6. Never use Index as *Key* for map


```
{
          words.map((word, index) => {
               <Word 
               {...word}
               key={index} />
          })
}
``` 

You often see indexes being used as a key when rendering a list, as mentioned in the above example.

By using the key as the index can show your app incorrect data as it is being used to identify DOM elements. When you push or remove an item from the list if the key is the same as before, React assumes that the DOM element represents the same component. However, if the data has a unique property, such as an ID, then it's better to use that property.

```
{
          words.map((word, index) => {
               <Word 
               {...word}
               key={word.id} />
          })
}
``` 

or if your data doesn't have any unique attributes, then you can think of using the **shortid** module which generates a unique key.

```
import shortid from  "shortid"
{
          words.map((word, index) => {
               <Word 
               {...word}
               key={shortid.generate()} />
          })
}
``` 

### 7. Use Server-Side Rendering (SSR) when needed
In recent years, companies such as Walmart and Airbnb have adopted SSR to provide more detailed user information about React. One of the main advantages of SSR is better performance for the users, as they will get content that looks faster than they could with the application provided on the client-side.

However, providing an application that requires large amounts of data on a server can be a performance bottleneck. The SSR provides the advantage of consistent SEO performance and performance

Here are some popular solutions that provide SSR for React applications:

-  [Next.js](https://github.com/zeit/next.js/) 
-  [Gatsby](https://github.com/gatsbyjs/gatsby) 

### 8. Memoization of React Components and methods
When you have been making pretty big projects using React and it's noticing performance issues, now that's very rare because React, for the most part, is very performant but if you are noticing performance issues in any of your components then memoization the concept of memorization.

Memoization is an optimization technique used to primarily speed up programs by storing the results of expensive function calls and returning the cached results when the same inputs occur again.

As we discussed above that React.PureComponent performs optimization that uses shouldComponentUpdate() lifecycle method that makes a shallow comparison of props and state from the previous render of the component. As shallow rendering only tests the state and props of the component and does not test the state and props of the child components with React.PureComponent.

React.PureComponent is only restricted for class components that rely on the shouldComponentUpdate() lifecycle method and state.

Memoising can be applied to both functional and class components. This feature implementation has both HOC’s and React hooks. We can implement memoization in functional components by using the following react-hooks as per requirements

**1. React.memo()** It's a Higher Order Component that performs the same shallow comparison between props of the component and determines if the component should be rendered or not. This hook can be useful for stateless components where we are only using props to get the data. We can wrap our component into **memo** HOC.

<iframe src="https://codesandbox.io/embed/modest-lake-oo1iy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="modest-lake-oo1iy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**2. useMemo** is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the dependencies array. 
```
const memoizedResult = useMemo(compute, dependencies)
```
The HOC memo, which accepts a react component and an optional function that uses props to conditionally update the component using memoization, whereas **useMemo** is a react hook that will accept a function and a dependency array and then memoize the value returned from the function 

<iframe src="https://codesandbox.io/embed/example-usememo-gg1wu?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Example useMemo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

**3. useCallback** gives you referential equality between renders for functions. And **useMemo** gives you referential equality between renders for values. **useCallback** also expect a function and an array of dependencies. The difference is that **useCallback** returns its function when the dependencies change.

<iframe src="https://codesandbox.io/embed/usecallback-example-jffif?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useCallback example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 9. Use the Production Build

> Note: These tips can be used if the application is created by using ** Create React App**

If you are experiencing performance problems in your React apps for production, make sure you’re testing with the minified production build.

By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.

If you aren’t sure whether your build process is set up correctly, you can check it by installing [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). If you visit a site with React in production mode, the icon will have a dark background:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1637913800175/Y4k6iVmjX.png)

If you visit a site with React in development mode, the icon will have a red background:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1637913816243/33VYOZmmW.png)

It is expected that you use the development mode when working on your app, and the production mode when deploying your app to the users.

If your project is built with Create React App, run:

```
npm run build
``` 

This will create a production build of your app in the **build/** folder of your project.

Remember that this is only necessary before deploying to production. For normal development, use **npm start**.

You do not need to install any other plugins if you used **create-react-app** to create your react application as its **npm build** command already producing an optimized production build

# Thanks for reading this article
I hope this article would help the ReactJs developers to optimize the ReactJs applications. There are many ways to optimize a React app, for example, lazy loading components, using ServiceWorkers to cache application state, considering SSR, avoiding unnecessary renders, etc. That said, before considering optimization, it’s worth understanding how to React components work, understanding diffing algorithms, and how rendering works in React. These are all important concepts to take into consideration when optimizing your application.

If you enjoy reading this article like share and comment.

