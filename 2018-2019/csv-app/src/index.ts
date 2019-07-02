import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
reader.read()

enum MatchResult {
    HomeWin = 'H',
    AwayWin ='A',
    Draw = 'D',
};