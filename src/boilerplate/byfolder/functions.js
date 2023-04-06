const { exec } = require("shelljs");
const path = require("path");
const fs = require("fs");
const { writeFile } = require("fs/promises");

const { capitalizeFirstCharacter } = require("../../utils/functions");
const { appComponentContent } = require("./dist/appComponentContent");
const { routeConstantsContent } = require("./dist/routeConstantsContent");
const { homeComponentContent } = require("./dist/homeComponentContent");
const { homeContainerContent } = require("./dist/homeContainerContent");
const { homeComponentStyles } = require("./dist/homeComponentStyles");
const { homePageStyles } = require("./dist/homePageStyles");
const { homePageContent } = require("./dist/homePageContent");
const { rootIndex } = require("./dist/rootIndex");
const { rootReducerContent } = require("./dist/rootReducerContent");
const { reduxStoreContent } = require("./dist/reduxStoreContent");
const { routesContent } = require("./dist/routesContent");

const setupFolderStructure = (projectPath) => {
  const folders = [
    "src/components",
    "src/components/App",
    "src/components/Home",
    "src/constants",
    "src/pages",
    "src/pages/Home",
    "src/routes",
    "src/redux",
    "src/utils",
    "src/utils/hooks",
  ];

  folders.forEach((folder) => {
    const folderPath = path.join(projectPath, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  });
};

const setupReduxAndRoutes = async (projectPath) => {
  await Promise.all([
    writeFile(
      path.join(projectPath, "src/constants/appRoutes.js"),
      routeConstantsContent
    ),
    writeFile(
      path.join(projectPath, "src/components/App/index.js"),
      appComponentContent
    ),
    writeFile(
      path.join(projectPath, "src/components/Home/index.js"),
      homeContainerContent
    ),
    writeFile(
      path.join(projectPath, "src/components/Home/Home.jsx"),
      homeComponentContent
    ),
    writeFile(
      path.join(projectPath, "src/components/Home/styles.js"),
      homeComponentStyles
    ),
    writeFile(
      path.join(projectPath, "src/pages/Home/HomePage.jsx"),
      homePageContent
    ),
    writeFile(
      path.join(projectPath, "src/pages/Home/styles.js"),
      homePageStyles
    ),
    writeFile(path.join(projectPath, "src/routes/appRoutes.js"), routesContent),
    writeFile(path.join(projectPath, "src/redux/store.js"), reduxStoreContent),
    writeFile(
      path.join(projectPath, "src/redux/rootReducer.js"),
      rootReducerContent
    ),
    writeFile(path.join(projectPath, "src/index.js"), rootIndex),
  ]);
};

const isReactApp = () => {
  const requiredFolders = [
    "src/components",
    "src/pages",
    "src/routes",
    "src/constants",
  ];

  return requiredFolders.every((folder) => {
    const folderPath = path.join(process.cwd(), folder);
    return fs.existsSync(folderPath);
  });
};

const createApp = (appname) => {
  const projectPath = path.join(process.cwd(), appname);

  if (!appname) {
    console.log("Error: Please provide a project name");
    process.exit(1);
  }

  if (fs.existsSync(projectPath)) {
    console.log(`Error: A directory with the name ${appname} already exists`);
    process.exit(1);
  }

  const removeDefaultFiles = () => {
    const defaultFiles = [
      "src/App.js",
      "src/App.css",
      "src/App.test.js",
      "src/index.css",
      "src/index.js",
      "src/logo.svg",
    ];

    defaultFiles.forEach((file) => {
      const filePath = path.join(projectPath, file);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });
  };

  console.log(`Creating React app "${appname}"...`);
  exec(`npx create-react-app ${appname}`);

  // Install additional dependencies
  console.log("Installing additional dependencies...");
  exec(
    `cd ${appname} && npm install react-router-dom redux react-redux redux-thunk @material-ui/core @material-ui/icons --legacy-peer-deps`
  );
  exec(
    `cd ${appname} && npm install --save-dev @types/material-ui --legacy-peer-deps`
  );
  console.log("Removing default files...");
  removeDefaultFiles();

  console.log("Setting up folder structure...");

  console.log("Hurray. Your react application has been successfully setup.");
  (async () => {
    await setupFolderStructure(appname);
    await setupReduxAndRoutes(projectPath);
  })();
};

const createComponent = (componentName) => {
  if (!isReactApp()) {
    console.log(
      "Error: It seems like you are not in project directory or the project is not created by react-quick-builder."
    );
    console.info(
      "Info: Please run this command inside a React application folder if its created by react-quick-builder."
    );
    process.exit(1);
  }

  const options = program.opts();
  console.log(options);
  if (options.routes && options.redux) {
    console.log("jer");
    // Create component with routes and redux
    createBasicComponent(componentName);
    createComponentWithRoutes(componentName);
    createComponentWithRedux(componentName);
  } else if (options.routes) {
    // Create component with routes
    createBasicComponent(componentName);
    createComponentWithRoutes(componentName);
  } else if (options.redux) {
    // Create component with redux
    createBasicComponent(componentName);
    createComponentWithRedux(componentName);
  } else {
    // Create basic component
    createBasicComponent(componentName);
  }
};

const createBasicComponent = (componentName) => {
  // Code to create component with routes
  console.log(`Creating component...`);
  // Capitalize the first character of the component name
  const capitalizedComponentName = capitalizeFirstCharacter(componentName);

  // Create the component folder
  const componentFolder = path.join(
    process.cwd(),
    "src",
    "components",
    capitalizedComponentName
  );
  if (fs.existsSync(componentFolder)) {
    console.log(`Error: "${componentName}" component already exists`);
    process.exit(1);
  } else {
    fs.mkdirSync(componentFolder, { recursive: true });
  }

  // Create index.js file
  const indexPath = path.join(componentFolder, "index.js");
  const indexContent = `import React from 'react';
  import ${capitalizedComponentName} from './${capitalizedComponentName}';
  
  const ${capitalizedComponentName}Container = (props) => {
    return (
      <${capitalizedComponentName} {...props} />
    );
  }
  
  export default ${capitalizedComponentName}Container;
  `;
  fs.writeFileSync(indexPath, indexContent);

  // Create <ComponentName>.jsx file
  const componentPath = path.join(
    componentFolder,
    `${capitalizedComponentName}.jsx`
  );
  const componentContent = `import React from 'react';
  import useStyles from './style';
  
  const ${capitalizedComponentName} = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <h1>${capitalizedComponentName}</h1>
      </div>
    );
  };
  
  export default ${capitalizedComponentName};
  `;
  fs.writeFileSync(componentPath, componentContent);

  // Create style.js file
  const stylePath = path.join(componentFolder, "style.js");
  const styleContent = `import { makeStyles } from '@material-ui/core/styles';
  
  const useStyles = makeStyles((theme) => ({
    root: {
      // Add your styles here
    },
  }));
  
  export default useStyles;
  `;
  fs.writeFileSync(stylePath, styleContent);

  console.log(`Created basic component: ${capitalizedComponentName}`);
};

const createComponentWithRoutes = (componentName) => {
  // Code to create component with routes
  console.log(`Creating component with routes...`);
  // Capitalize the first character of the component name
  const capitalizedComponentName = capitalizeFirstCharacter(componentName);

  // Create the component folder
  const componentFolder = path.join(
    process.cwd(),
    "src",
    "components",
    capitalizedComponentName
  );
  if (fs.existsSync(componentFolder)) {
    console.log(`Error: "${componentName}" component already exists`);
    process.exit(1);
  } else {
    fs.mkdirSync(componentFolder, { recursive: true });
  }

  // Create index.js file
  const indexPath = path.join(componentFolder, "index.js");
  const indexContent = `import React from 'react';
  import ${capitalizedComponentName} from './${capitalizedComponentName}';
  
  const ${capitalizedComponentName}Container = (props) => {
    return (
      <${capitalizedComponentName} {...props} />
    );
  }
  
  export default ${capitalizedComponentName}Container;
  `;
  fs.writeFileSync(indexPath, indexContent);

  // Create <ComponentName>.jsx file
  const componentPath = path.join(
    componentFolder,
    `${capitalizedComponentName}.jsx`
  );
  const componentContent = `import React from 'react';
  import useStyles from './style';
  
  const ${capitalizedComponentName} = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <h1>${capitalizedComponentName}</h1>
      </div>
    );
  };
  
  export default ${capitalizedComponentName};
  `;
  fs.writeFileSync(componentPath, componentContent);

  // Create style.js file
  const stylePath = path.join(componentFolder, "style.js");
  const styleContent = `import { makeStyles } from '@material-ui/core/styles';
  
  const useStyles = makeStyles((theme) => ({
    root: {
      // Add your styles here
    },
  }));
  
  export default useStyles;
  `;
  fs.writeFileSync(stylePath, styleContent);

  // Create constants file
  const constantsPath = path.join(
    process.cwd(),
    "src",
    "constants",
    `${componentName}Constants.js`
  );
  const constantsContent = `export const ${componentName.toUpperCase()}_ROUTE = "/${componentName}";\n`;
  fs.writeFileSync(constantsPath, constantsContent);

  // Append route to routes file
  const routesPath = path.join(process.cwd(), "src", "routes", "appRoutes.js");
  const routeContent = `import ${capitalizedComponentName} from "../components/${capitalizedComponentName}";\n`;
  fs.appendFileSync(routesPath, routeContent);

  const newRouteContent = `<Route path={${componentName.toUpperCase()}_ROUTE} element={<${capitalizedComponentName} />} />\n`;
  fs.appendFileSync(routesPath, newRouteContent);
};

const createComponentWithRedux = (componentName) => {
  // Code to create component with Redux
  console.log(`Creating component with Redux: ${componentName}`);
};

module.exports = {
  setupFolderStructure,
  setupReduxAndRoutes,
  createApp,
  createComponent,
};
