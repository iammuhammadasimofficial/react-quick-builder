const { Command } = require("commander");
const { createApp } = require("../boilerplate/byfolder/functions");

const createAppCommand = new Command("create-app")
  .argument("<appname>")
  .description(
    "Create a new React app with a standardized folder structure, including Redux, React Router, and Material-UI."
  )
  .action((appname) => {
    createApp(appname);
  });

module.exports = createAppCommand;
