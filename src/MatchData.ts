import { MatchResult } from './MatchResult';
// we will use tuple to describe the return type of read() method as tuples work pretty good with csv format
// we are implicitly saying MatchData types will be Array
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
