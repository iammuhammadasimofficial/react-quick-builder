// mainProgram.js
const { program } = require("commander");
const createAppCommand = require("./commands/createAppCommand");
const createComponentCommand = require("./commands/createComponentCommand");

program
  .name("react-quick-builder")
  .usage("[command] [options]")
  .description("A CLI tool to help you quickly build React applications and React Components.");

program.addCommand(createAppCommand);
program.addCommand(createComponentCommand);

const examples = `
Examples:
  $ react-quick-builder create-app my-app
  $ react-quick-builder create-component MyComponent
  $ react-quick-builder create-component MyComponent --routes
  $ react-quick-builder create-component MyComponent --redux
  $ react-quick-builder create-component MyComponent --routes --redux`;

program.addHelpText("after", examples);

module.exports = program;
