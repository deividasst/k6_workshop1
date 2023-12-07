const reporter = require('k6-html-reporter');
export const options = {
  jsonFile: 'output/output.json',
  output: 'output',
};

export function generateHtmlSummaryReport() {
  reporter.generateSummaryReport(options);
}
