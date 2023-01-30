"use strict";

if (process.argv.length !== 5) {
  console.log("only you need put node calculate 1 + 2, in tis format ");
} else {
  const [, , numberA, op, numberB] = process.argv;
  console.log(typeof numberA);
  const first = +numberA; //Number(numberA)

  const second = Number(numberB); //+numberB

  let result;
  if (op === "+") {
    result = first + second;
  } else if (op === "-") {
    result = first - second;
  } else if (op === "x") {
    result = first * second;
  } else if (op === "/") {
    result = first / second;
  }

  console.log(`${first} ${op} ${second} = ${result}`);
}
