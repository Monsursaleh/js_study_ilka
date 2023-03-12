"use strict";

// creating the promise for using future purpose  -- pending state if we dont use it

// function slowOp () {
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("slow but steady"), 2000); //2000ms = 1s
//   });
// };

// console.log(slowOp);
// slowOp.then((result) => console.log(result));
// console.log("end");

function slowRandomLengthOperation() {
  return new Promise((resolve, reject) => {
    // it resolve or reject  callback fucntion
    setTimeout(() => resolve("resolved"), Math.random() * 4500); //0-1.5s

    setTimeout(() => reject("rejected"), Math.random() * 2000); //0-2s
  });
}

// console.log(slowRandomLengthOperation()); //pending

// we can use our promise   by then method
// slowRandomLengthOperation()
//   .then((result) => {
//     console.log("result_1", result);
//     console.log("something");
//   })
//   .catch((error) => {
//     console.log("error_1", error);
//   })
//   .then(() => {
//     console.log("1_past the try and catch");
//   });

async function test() {
  try {
    const result = await slowRandomLengthOperation();
    console.log("result:", result);
    console.log("something");
  } catch (error) {
    console.log("error:", error);
  }
  console.log("past the try-catch");
}

// test();

// 'The Promise.all() static method takes an iterable of promises as input and returns a **single Promise. This returned promise** fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
//*** */ It rejects when any of the input's promises rejects, with this first rejection reason.***
const promise1 = Promise.resolve(3); // if its reject then nothing will return
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  //array passsed
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]-- array of fullfillment value

// Promise.any()
// The Promise.any() static method takes an iterable of promises as input and returns a **single Promise. This returned promise fulfills when any of the ***input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

const promise11 = Promise.reject(0); // no rejected value is taken
const promise12 = new Promise((resolve) => setTimeout(resolve, 100, "quick")); // it returns this because it fullfill first
const promise13 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise11, promise12, promise13];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"

// Promise.all([
//   slowRandomLengthOperation(),
//   slowRandomLengthOperation(),
//   slowRandomLengthOperation(),
//   slowRandomLengthOperation(),
// ])
//   .then(console.log)
//   .catch(console.log);

// Promise.any([slowRandomLengthOperation(), slowRandomLengthOperation()])
//   .then(console.log)
//   .catch(console.log);

/// from w3 schools
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );
