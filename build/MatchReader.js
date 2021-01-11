"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
// accepts a type of DataReader i.e. CsvFileReader
// calls the chosen DataReaders read method to get it to populate its data variable
// then converts the DataReader's data into a MatchData[] format
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    // preconfigured method that can be directly called from MatchReader class
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        // Chosen DataReader populates its internal data property with data
        // read method could be doing a fs read or maybe fetch request to external api...
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // type assertion is made here so typescript default behaviour is overwritten
                // Ts now sees row[5] as not a type string, but a member of MatchResult enum
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
