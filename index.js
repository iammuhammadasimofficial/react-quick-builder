#!/usr/bin/env node

const mainProgram = require("./src/main");

// Display help if no arguments provided
if (!process.argv.slice(2).length) {
  mainProgram.outputHelp();
} else {
  mainProgram.parse(process.argv);
}
