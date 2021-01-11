"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// a class that reads a provided csv file from the current directory of file system,
// when its read method is called, it assigns the resulting data in a string[][] format
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
        });
        // go over each of array elements, and convert them if appropriate value is found
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
