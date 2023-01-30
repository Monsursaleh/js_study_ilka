"use strict";

const [, , suite = "?"] = process.argv;
console.log(process.argv);

let suiteSymbol = "?";

const suiteLowered = suite.toLowerCase();

if (suiteLowered === "hearts") {
  suiteSymbol = "\u2665";
} else if (suiteLowered === "diamonds") {
  suiteSymbol = "\u2666";
} else if (suiteLowered === "spades") {
  suiteSymbol = "\u2660";
} else if (suiteLowered === "clubs") {
  suiteSymbol = "\u2663";
}
// else{
//     suiteSymbol='?';
// }

console.log(`Suite symbol is ${suiteSymbol}`);
