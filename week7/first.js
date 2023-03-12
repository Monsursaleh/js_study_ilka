"use strict";

// A comeplte example

let myDisplayer = (some) => {
  console.log("display", some);
};

let myPromise1 = new Promise(function (myResolve, myReject) {
  const x = Math.floor(Math.random() * 10);

  // The producing code (this may take some time)

  if (x > 5) {
    myResolve("OK", x);
  } else {
    myReject("Error", x);
  }
});

myPromise1.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
// creating  new promsie that will use later for example
//- build for when need some time fro bwoser or sever to get the ready teh data

// only funciton return will return will return promise .. resolve and reject resever workd
let checkNumberBigEnough_prmomise = function (number) {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      reject("too small");
    } else {
      resolve("big enough");
    }
  });
};

checkNumberBigEnough_prmomise(12).then(console.log).catch(console.log);

function checkNumberBigEnough(number) {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      reject("too small");
    } else {
      resolve("big enough");
    }
  });
}

/// we use console insted of call back fucntion

// then for resove and .catch for errror
checkNumberBigEnough_prmomise(12).then(console.log).catch(console.log);
checkNumberBigEnough(2).then(console.log).catch(console.log);
//  here we used call back in then result or error
// reult and error is output from promsie
checkNumberBigEnough(34)
  .then((result) => console.log("it's " + result))
  .catch((error) => console.log(`Error: ${error}`));

checkNumberBigEnough(3)
  .then((result) => console.log("it's " + result))
  .catch((error) => console.log(`Error: ${error}`));

/// Outcome note here all reolve  ouput coming first then reject
