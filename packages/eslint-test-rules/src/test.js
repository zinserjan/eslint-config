import { exec } from "child_process";
import { CLIEngine } from "eslint";
import { sync as globSync } from "glob";
import { checkGood, checkWarning, checkError } from "./eslint/report";
import type { TestResults} from "./eslint/report";

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

  let errors = 0;

  if (goodFiles.length > 0) {
    const { results } = cli.executeOnFiles(goodFiles);
    const result: TestResults = checkGood(shrinkFilePaths(cwd, results));
    errors += result.errors;
    console.log(result.report);
  }

  if (warnFiles.length > 0) {
    const { results } = cli.executeOnFiles(warnFiles);
    const result: TestResults = checkWarning(shrinkFilePaths(cwd, results));
    errors += result.errors;
    console.log(result.report);
  }

  if (errorFiles.length > 0) {
    const { results } = cli.executeOnFiles(errorFiles);
    const result: TestResults = checkError(shrinkFilePaths(cwd, results));
    errors += result.errors;
    console.log(result.report);
  }

  process.exit(errors);
};
