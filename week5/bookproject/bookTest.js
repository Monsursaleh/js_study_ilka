"use strict";

const library = require("./books.json");
console.log("-----1------");
console.log(library);
console.log("-----2------");
console.log(...library);
console.log("-----3------");
console.log(library[0].books);
console.log("-----4------");
console.log(library[0].books[0]);
console.log("----------------");
console.log(...library[0].books);
console.log("-----5------");
console.log(library[0].books[0].name);
console.log("-----6------");
console.log(library[0].books[1]);
console.log(library[0].books[1].name);

console.log("####### first person ########");
for (const book of library[0].books) {
  console.log(`${book.name}, ${book.price} €`);
}
console.log("/////////////////");
let bookArr = library[0].books;
for (let book of bookArr) {
  console.log(`first person books ${book.name} and price is ${book.price} `);
}

console.log("####### second person ########");
for (const book of library[1].books) {
  console.log(`${book.name}, ${book.price} €`);
}

console.log("##### all persons, all books ######");

let cout = 1;
let coutDown = 10;
for (const person of library) {
  console.log("++");
  console.log(coutDown--);
  for (const book of person.books) {
    console.log("*");
    console.log(cout++);
    console.log(book.name);
  }
}

console.log("####### version 2 #########################");
for (const person of library) {
  console.log(`${"\t"} ${"\t"} ${"\t"} ${person.firstname} ${person.lastname}`);
  for (const book of person.books) {
    console.log(`${"\t"} ${book.name}`);
  }
}

console.log("########## another version ######");
for (const person of library) {
  for (const book of person.books) {
    console.log(`${person.firstname} ${person.lastname}: ${book.name}`);
  }
}
console.log("########## another version again ######");
for (const person of library) {
  const name = `${person.firstname} ${person.lastname}`;
  for (const book of person.books) {
    console.log(`${name}: ${book.name}`);
  }
}

console.log("### total number of pages per person ########");
//output example:
//Matt River: 1300 pages
//Leila Hökki: 500 pages
//Vera River: 0 pages
// let sumOfPages = 0;??? behaves diffrent --
for (const person of library) {
  let sumOfPages = 0;
  console.log("Sum pages Upper loop = ", sumOfPages);
  for (const book of person.books) {
    sumOfPages += book.pages;
    console.log("Sum pages Lower loop = ", sumOfPages);
  }
  console.log(`${person.firstname} ${person.lastname}: ${sumOfPages} pages`);
  // console.log(`${person.firstname} ${person.lastname}: `+
  //             `${sumOfPages} pages`);
}

console.log("### total number of pages and total price per person ###");
//output example:
//Matt River: 1300 pages (125 €)
//Leila Hökki: 500 pages (100 €)
//Vera River: 0 pages (0 €)
// here we need individul propertey value sum in inner loop

for (let person of library) {
  let sumB = 0;
  let name = person.firstname;
  for (let book of person.books) {
    sumB = sumB + book.price;
  }
  console.log(name, ":", sumB);
}

for (const person of library) {
  let sumOfPages = 0;
  let sumOfPrices = 0;
  const name = `${person.firstname} ${person.lastname}`;
  for (const book of person.books) {
    sumOfPages += book.pages;
    sumOfPrices += book.price;
  }
  console.log(`${name}: ${sumOfPages} pages (${sumOfPrices} €) `);
}

console.log(
  "### total number of pages and total price per person + att together ###"
);
//output example:
//Matt River: 1300 pages (125 €)
//Leila Hökki: 500 pages (100 €)
//Vera River: 0 pages (0 €)
//################################
//Total price: 225 €,
//Total page count is 1800 pages

let totalPages = 0;
let totalPrice = 0;
//need global variable for one single output
for (const person of library) {
  let sumOfPages = 0;
  let sumOfPrices = 0;
  // check first the vairable
  const name = `${person.firstname} ${person.lastname}`;
  // deifne the name as variable
  for (const book of person.books) {
    // now inner variaable user and
    //running for at the end of the
    // array and add it
    sumOfPages += book.pages;
    sumOfPrices += book.price;
  }
  //inner loop finnish then we need variabel to find the sum variabe
  console.log(`${name}: ${sumOfPages} pages (${sumOfPrices} €) `);
  totalPages += sumOfPages;
  // taking the value from outside teh of the loop
  // inside vairbale cant use due to the code blok or curlu barace
  totalPrice += sumOfPrices;
}
/// one output done then it goes to out of the loop print the line  and goes back again in top loop to finnish teh process
console.log("#################################");
console.log(`Total price: ${totalPrice} €, 
Total page count is ${totalPages} pages`);
console.log("Total value-------------------");
function totalPriceOfTheLibrary() {
  let sum = 0;
  for (const person of library) {
    for (const book of person.books) {
      sum += book.price;
    }
  }
  return sum;
}

console.log("The value of the library is", totalPriceOfTheLibrary(), "€");

let totalLiabrary = () => {
  let sum = 0;
  for (let person of library) {
    for (let book of person.books) {
      sum = sum + book.price;
    }
  }
  return sum;
};

console.log(totalLiabrary());
