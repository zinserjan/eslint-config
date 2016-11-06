import path from "path";
import { Module } from "module";


process.env.NODE_PATH = [path.join(process.cwd(), "/node_modules")].join(":");
Module._initPaths();

const meow = require('meow');
const test = require('./test');

const cli = meow(`
    Usage
      $ eslint-test-rules

    Options
     --error glob for error rules
     --warn glob for warn rules
     --good glob for good rules

    Examples
      $ eslint-test-rules -e ./rules/**/*.error.js
      $ eslint-test-rules -w ./rules/**/*.warn.js
      $ eslint-test-rules -g ./rules/**/*.good.js
      $ eslint-test-rules -g ./rules/**/*.good.js -w ./rules/**/*.warn.js  -e ./rules/**/*.error.js
`);

test(cli.flags);
