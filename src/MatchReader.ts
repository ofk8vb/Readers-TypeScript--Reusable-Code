import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

// this interface made sure the reader argument to MatchReader class had the required methods
interface DataReader {
  read(): void;
  data: string[][];
}

// accepts a type of DataReader i.e. CsvFileReader
// calls the chosen DataReaders read method to get it to populate its data variable
// then converts the DataReader's data into a MatchData[] format
export class MatchReader {
  // preconfigured method that can be directly called from MatchReader class
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    // Chosen DataReader populates its internal data property with data
    // read method could be doing a fs read or maybe fetch request to external api...
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // type assertion is made here so typescript default behaviour is overwritten
          // Ts now sees row[5] as not a type string, but a member of MatchResult enum
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
