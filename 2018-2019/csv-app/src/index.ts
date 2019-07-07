import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./WinsAnalysis";
import { ConsoleReport } from "./ConsoleReport";
import { HtmlReport } from "./HtmlReport";

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);

matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches);