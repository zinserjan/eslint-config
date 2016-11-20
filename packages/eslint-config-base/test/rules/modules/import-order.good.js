// 1. node "builtins"
import fs from "fs";
import path from "path";
// 2. "external" modules
import _ from "lodash";
import chalk from "chalk";
// 3. "internal" modules
// (if you have configured your path or webpack to handle your internal paths differently)
import foo from "src/foo";
// 4. modules from a "parent" directory
import foo from "../foo";
import qux from "../../foo/qux";
// 5. "sibling" modules from the same or a sibling's directory
import bar from "./bar";
import baz from "./bar/baz";
// 6. "index" of the current directory
import main from "./";
