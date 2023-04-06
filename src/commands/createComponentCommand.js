const { Command } = require("commander");
const { createComponent } = require("../boilerplate/byfolder/functions");

const createComponentCommand = new Command("create-component")
  .argument("<componentname>")
  .description("Create a new component.")
  .option(
    "--routes",
    "create a new component along with the component, constants, page, and routes"
  )
  .option(
    "--redux",
    "create a new component which includes the component and sets up a new Redux reducer"
  )
  .action((componentName, options) => {
    createComponent(componentName, options);
  })
  .showHelpAfterError();

module.exports = createComponentCommand;
