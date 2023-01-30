"use strict";

console.log("Hello world!");

const a = 10;
console.log(a);
// a=12; error

let b = 20; // let is reasssignbele
console.log(b);
b = 50;
console.log(b);

let c = a + b;
console.log("-----");
console.log("c=", c);
console.log("c=" + c); //string + number = string
const result = "c= " + c;
console.log(result);
console.log("c= " + c);
console.log("sum= " + a + b);
console.log("sum= " + (a + b));/// preentheis operation

console.log(`Result of ${a} + ${b} = ${c}`);
console.log(`sum of ${a} and ${b} is ${a + b}`);// {only used for expression or variable}
console.log(`abd`);
console.log("abd");

console.log("addsad 'dasdsa' sadsad");
console.log("sadsadad 'asasass' asdsad");
console.log(`sadasd "dfdsf" 'erewrrew' ddsfd`); // backtick  shift + option + bactick for waraping 
console.log('asdsadd "assada" asdasd');

console.log("\u2663");// hexcode  color '' with and without 
console.log("\u2666");
const hearts = "\u2665";
console.log(hearts);
const spade = "\u2660";
console.log(spade);

console.log("\u2700");

console.log(String.fromCodePoint(0x1f977));
console.log(String.fromCodePoint(0x1f481));
const funny = String.fromCodePoint(0x1f34d, ///method to get emoji 0x1f642);
console.log(funny);

// for(let i=0;i<10;i++){
//     console.log(`${i}`);
// }
