# React Quick Builder

React Quick Builder is a command-line interface tool that helps you create a new React application with a standardized folder structure. It includes Redux, React Router, and Material-UI.

## Installation

You can install React Quick Builder using NPM. Make sure you have NPM installed on your machine before running the following command:

```
npm install -g react-quick-builder
```

Note: If you're getting permission issues, make sure to run the command using administrative privileges.

## Getting Started

After installing React Quick Builder, you can use it to create a new React application with the following command:

```lua
react-quick-builder create-app my-app
```

This will create a new React application with the folder structure shown below:

```javascript
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── App/
│   │       └── index.js
│   │   └── Home/
│   │       ├── index.js
│   │       └── Home.jsx
│   │       └── styles.js
│   ├── constants/
│   │       └── appRoutes.js
│   ├── pages/
│   │   └── Home/
│   │       ├── HomePage.jsx
│   │       └── styles.js
│   ├── routes/
│   │       └── appRoutes.js
│   ├── redux/
│   │       └── rootReducer.js
│   │       └── store.js
│   ├── utils/
│   │   └── hooks/
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

## Creating a Component

You can also create a new component using the following command:

```lua
react-quick-builder create-component MyComponent
```

This will create a new component named **`MyComponent`** in the **`src/components`** folder.

If you want to create a component with additional features, such as Redux or React Router, you can use the **`--redux`** and **`--routes`** flags, respectively:

```lua
react-quick-builder create-component MyComponent --redux
react-quick-builder create-component MyComponent --routes
react-quick-builder create-component MyComponent --redux --routes
```

This will create a new component with the specified features in the **`src/components`** folder.

## Examples

```bash
# Create a new React app
react-quick-builder create-app my-app

# Create a new component
react-quick-builder create-component MyComponent

# Create a new component with routes
react-quick-builder create-component MyComponent --routes

# Create a new component with Redux
react-quick-builder create-component MyComponent --redux

# Create a new component with routes and Redux
react-quick-builder create-component MyComponent --routes --redux

```

## Contributing

We welcome contributions from the community! Please feel free to create a pull request if you have any suggestions or improvements for the project.

## License

This project is licensed under the MIT License.
