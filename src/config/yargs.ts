#!/usr/bin/env node
import yargs = require("yargs");

const argv = yargs
  .options({
    username: {
      type: "string",
      alias: "u",
      desc: "github repo username",
      demand: true,
    },
  })
  .help()
  .version().argv;

export default { argv };
