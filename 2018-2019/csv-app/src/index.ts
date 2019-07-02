import fs from 'fs';

const matches = fs
    .readFileSync('football.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',');
    })

enum MatchResult {
    HomeWin = 'H',
    AwayWin ='A',
    Draw = 'D',
};

