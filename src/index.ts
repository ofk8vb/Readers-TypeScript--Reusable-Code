// import { MatchReader } from './MatchReader';

import { MatchReader } from './MatchReader';

import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface

// const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something that satisfies the interface 'DataReader'

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   // new ConsoleReport()
//   new HtmlReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
