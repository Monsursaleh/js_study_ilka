"use strict";
//ramdom: 0<=rand<1
const suite = Math.floor(Math.random() * 4); //0<=rand<4 so 0,1,2,3
const rank = Math.floor(Math.random() * 13) + 1; //1<=rank<=13

console.log(`${getSuiteSymbol(suite)} and rank is  ${rank}`);

function getSuiteSymbol(tmpSuite) {
  switch (tmpSuite) {
    case 0:
      return "\u2665";
    case 1:
      return "\u2666";
    case 2:
      return "\u2660";
    case 3:
      return "\u2663";
  }
}
