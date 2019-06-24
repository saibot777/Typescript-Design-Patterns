import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data)

const charsCollection = new CharactersCollection('Xaayb')
const sorter = new Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);