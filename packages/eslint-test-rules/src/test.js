import { exec } from "child_process";
import { CLIEngine } from "eslint";
import { sync as globSync } from "glob";
import { checkGood, checkWarning, checkError } from "./eslint/report";

type CliArgs = {
  good?: string,
  warn?: string,
  error?: string
}

function shrinkFilePaths(path, results) {
  results.forEach((r) => r.filePath = r.filePath.replace(path, ''));
  return results;
}

module.exports = (args:CliArgs) => {
  const cwd = process.cwd();
  console.log(cwd);
  const cli: CLIEngine = new CLIEngine({ cwd, useEslintrc: true});

  const { good, warn, error } = args;
  const goodFiles = good ? globSync(good) : [];
  const warnFiles = warn ? globSync(warn) : [];
  const errorFiles = error ? globSync(error) : [];

  if (goodFiles.length > 0) {
    const { results } = cli.executeOnFiles(goodFiles);
    const result: string = checkGood(shrinkFilePaths(cwd, results));
    console.log(result);
  }

  if (warnFiles.length > 0) {
    const { results } = cli.executeOnFiles(warnFiles);
    const result: string = checkWarning(shrinkFilePaths(cwd, results));
    console.log(result);
  }

  if (errorFiles.length > 0) {
    const { results } = cli.executeOnFiles(errorFiles);
    const result: string = checkError(shrinkFilePaths(cwd, results));
    console.log(result);
  }
};
