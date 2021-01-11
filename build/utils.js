"use strict";
// utility method that takes a valid date in string format, and returns a Date object instantiated with parsed date from the input dateString
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // 28/10/2018 would turn into [28,10,2018]
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    // Date object can create a date object if Year, month, day numbers are provided
    // we subtract 1 from the month because month inside Date object constructor is 0 indexed
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
