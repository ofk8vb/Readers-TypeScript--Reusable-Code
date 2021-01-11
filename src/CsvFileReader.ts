import fs from 'fs';

// a class that reads a provided csv file from the current directory of file system,
// when its read method is called, it assigns the resulting data in a string[][] format
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  // data property is instantiated after calling read method
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      // split the data from new line, turning the data into one big array with elements of string string[]
      .split('\n')
      // go over each element of the new array, and make a new array at every ','. this return string[][]
      .map((row: string): string[] => {
        return row.split(',');
      });
    // go over each of array elements, and convert them if appropriate value is found
  }
}
