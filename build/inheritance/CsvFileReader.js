"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// we will use tuple to describe the return type of read() method as tuples work pretty good with csv format
// we are implicitly saying MatchData types will be Array
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    // data property is instantiated after calling read method
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            // split the data from new line, turning the data into one big array with elements of string string[]
            .split('\n')
            // go over each element of the new array, and make a new array at every ','. this return string[][]
            .map(function (row) {
            return row.split(',');
        })
            // go over each of array elements, and convert them if appropriate value is found
            // this.mapRow will be invoked automatically as .map callback function with anonymous argument given for each array element
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
