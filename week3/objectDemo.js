'use strict';

const person={
    firstname:'Jane',
    lastname:'Jones',
    age:30
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person['firstname']);

function printPersons(key){
    console.log(person[key]);
}
console.log('#################');
printPersons('firstname');
printPersons('age');

const card={
    suite:'spades',
    suiteSymbol:'\u2660',
    color:'black',
    rank:13,
    rankSymbol:'K'
};

const cardB = {
    suite: 'hearts',
    suiteSymbol: '\u2665',
    color: 'red',
    rank: 6,
    rankSymbol: '6'
}

console.log(card.rank>cardB.rank);

console.log(`${card.suiteSymbol} ${card.rankSymbol}`);
console.log(`${cardB.suiteSymbol} ${cardB.rankSymbol}`);