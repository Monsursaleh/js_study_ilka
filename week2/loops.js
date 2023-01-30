// // "use strict";

// // for (let i = 0; i < 10; i++) {
// //   // i++ is the same as i=i+1 or i+=1
// //   console.log(i); // untill 9
// // }
// // // console.log(i); //not defined

// // console.log("##############");
// // for (let i = 0; i < 5; i++) {
// //   console.log(i);
// // }
// // console.log("###############");
// // for (let i = 10; i > 0; i--) {
// //   console.log(i);
// // }
// // console.log("############");
// // let n = 0; /// if u define outside then
// // //u can get the last value after loop while is the example
// // for (; n < 6; n += 2) {
// //   console.log(n);
// // }
// // console.log("n=", n); // 6 when the loop ends

// // let k = 0;
// // for (; k < 6; ) {
// //   //use while instead
// //   console.log(k);
// //   k++;
// // }

// // console.log("##########");
// // let m = 0;
// // while (m < 10) {
// //   /// if its true then it goes to the loop (check 1 is less tehn 10 )
// //   console.log(m); // 0 it comes from variable first defien --it is a sequence line by lien / print 0,1
// //   m++; /// m = 0+1 , m = 1 , 1+1, 2+2.....
// // }

// console.log("##############");
// let g = 5;
// do {
//   // condition is check after .. if we want run a loop at lest once
//   console.log(g); //0
//   g++; // 1
// } while (g < 10); //1 less two ---lopp goes on
// console.log("--------------------");

// let result = "";
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// // Expected output: "12345"

console.log("########");
// do {
//   console.log("do this at least once", g);
// } while (g < 4);

// let notEnd = true;
// while (notEnd) {
//   /// loop enters
//   const number = Math.random(); // number genreate
//   console.log(number); // print
//   if (number < 0.3) {
//     // if its true .. then next line
//     notEnd = false; // false .. out of the loop
//   }
// }

// let hasNumber = function () {
//   // 2 check
//   let randomNumner = Math.random(); //
//   console.log(randomNumner); // print/// fucntion execute in every return before
//   return randomNumner < 0.5; // if its true  then fucntion return and below cl execute
// };

// while (hasNumber()) {
//   // its call the functiong 1
//   console.log("here we go"); /// when its return meand random is less then .5 then print
// }

// do {
//   console.log("here we go do while"); /// it is first
// } while (hasNumber()); // then call the fucntion

//for(;;){console.log('infinity')} //infinit loop

let result = ""; // string
let result_1 = "";
for (let row = 0; row < 5; row++) {
  // check the condition row
  for (let column = 0; column < 5; column++) {
    // colum -- it will lopop untill colum<
    // console.log(row, column);
    result += `*`; // 0+0 , 0+1 ,0+3, 0+4 ( striing)
    console.log(result);
  }
  result += "\n"; // after first loop then it comes line spece
  console.log(result);
}
console.log(result);

// for (let i = 0; i < 10; i++) {
//   result_1 += i;
//   console.log(result_1);
// }
// console.log(result_1);
// let j = 0;

// while (j < 20) {
//   j++;
//   console.log(j);
// }
// console.log("AFTER LOOP END", j);
