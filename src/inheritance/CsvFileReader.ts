import fs from 'fs';

// we will use tuple to describe the return type of read() method as tuples work pretty good with csv format
// we are implicitly saying MatchData types will be Array

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

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
      })
      // go over each of array elements, and convert them if appropriate value is found
      // this.mapRow will be invoked automatically as .map callback function with anonymous argument given for each array element
      .map(this.mapRow);
  }
}
