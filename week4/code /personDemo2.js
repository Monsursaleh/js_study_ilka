"use strict";

const person = require("./person.json");
// console.log(person);

// console.log(person.firstName);
// console.log(person["firstName"]);
// keys in an array

// console.log(Object.keys(person));

// values in an array

// console.log(Object.values(person));

// key values in an array
console.log("key and values: ", Object.entries(person));

// accessing each key value pair by key

// for (const key of Object.keys(person)) {
//   console.log(`Key is ${key} =  ${person[key]}`);
// }
// console.log("###############");
// accessing each key value pair by entires

for (const [key, value] of Object.entries(person)) {
  console.log(`key :${key} = key assess ${person[key]} and value is ${value}`);
}
