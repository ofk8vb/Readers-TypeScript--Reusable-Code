"use strict";
// import { MatchReader } from './MatchReader';
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something that satisfies the interface 'DataReader'
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   // new ConsoleReport()
//   new HtmlReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
