// @flow
import chalk from "chalk";
import table from "text-table";

type EslintMessage = {
  ruleId: string,
  severity: number,
  message: string,
  line: number,
  column: number
}

export type EslintResult = {
  filePath: string,
  messages: Array<EslintMessage>,
  errorCount: number,
  warningCount: number,
}

type TestReport = {
  passed: boolean,
  title: string,
  summary: string,
  detail?: string,
}
type TestResults = {
  report: string,
  passes: number,
  errors: number,
}

const passedGood = (result: EslintResult): boolean => result.errorCount === 0 && result.warningCount === 0;
const passedError = (result: EslintResult): boolean => result.errorCount > 0 && result.warningCount === 0;
const passedWarning = (result: EslintResult): boolean => result.errorCount === 0 && result.warningCount > 0;

const formatMessages = (messages: Array<EslintMessage>): string => {
  return table(messages.map((message) => {
    const messageType = message.fatal || message.severity === 2 ? chalk.red("error") : chalk.yellow("warning");

    return [
      "",
      message.line || 0,
      message.column || 0,
      messageType,
      message.message.replace(/\.$/, ""),
      chalk.cyan(message.ruleId || "")
    ];

  }), {
    align: ["", "r", "l"],
    stringLength(str) {
      return chalk.stripColor(str).length;
    }
  }).split("\n").map(el => el.replace(/(\d+)\s+(\d+)/, (m, p1, p2) => chalk.magenta(`${p1}:${p2}`))).join("\n");
};

const icon = (pass: ?boolean): string => {
  if (pass === null) {
    return '-';
  }
  return pass ? '✅' : '❌';
};


const createReport = (result: EslintResult, check: (result: EslintResult) => boolean): TestReport => {
  const passed = check(result);
  return {
    passed,
    title: result.filePath,
    summary: passed ? "Lint passed" : "Lint failed",
    detail: result.messages.length === 0 ? null : formatMessages(result.messages)
  };
};

const checkResults = (results: Array<EslintResult>, type: string, check: (result: EslintResult) => boolean): TestResults => {
  const reports: Array<TestReport> = results.map((result) => createReport(result, check));

  const reportResults: Array<string> = table(reports.map((report) => [
    report.passed ? chalk.green(icon(report.passed)) : chalk.red(icon(report.passed)),
    report.passed ? chalk.green(report.summary) : chalk.red(report.summary),
    chalk.white(`[${type}]`),
    chalk.underline.gray(report.title),
  ]), {
    align: ['', 'r', 'l'],
    stringLength: function (str) {
      return chalk.stripColor(str).length;
    }
  }).split("\n");

  const report = reportResults.map((report, index) => {
    const fullReport = [
      report,
    ];
    const testReport: TestReport = reports[index];

    if (testReport.detail !== null) {
      fullReport.push(testReport.detail);
    }
    return fullReport.join("\n");
  }).join("\n\n");

  return {
    report,
    passes: reports.filter((report) => report.passed).length,
    errors: reports.filter((report) => !report.passed).length,
  }
};

export function checkGood(results: Array<EslintResult>): TestResults {
  return checkResults(results, "good", passedGood);
}

export function checkError(results: Array<EslintResult>): TestResults {
  return checkResults(results, "error", passedError);
}

export function checkWarning(results: Array<EslintResult>): TestResults {
  return checkResults(results, "warn", passedWarning);
}
