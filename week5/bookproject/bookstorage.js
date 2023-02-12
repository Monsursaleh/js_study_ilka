"use strict";

const library = require("./books.json");

// function getBooksByname(firstname, lastname) {
//   let booksArr = [];
//   for (let person of library) {
//     if (person.firstname === firstname && person.lastname === lastname) {
//       for (let book of person.books) {
//         booksArr.push(book.name);
//         console.log(book.name);
//       }
//       return booksArr;
//     }
//   }
//   return [];
// }

// console.log(getBooksByname("Matt", "River"));

function getBooksOfPerson(firstname, lastname) {
  for (const person of library) {
    if (person.firstname === firstname && person.lastname === lastname) {
      return person.books;
    }
  }
  return [];
}

function getTheNamesOfBooks(firstname, lastname) {
  const found = [];
  for (const person of library) {
    if (person.firstname === firstname && person.lastname === lastname) {
      for (const book of person.books) {
        found.push(book.name);
      }
    }
  }
  return found;
}
// console.log(getTheNamesOfBooks("Matt", "River"));

function getTheTotals(firstname, lastname) {
  for (const person of library) {
    if (person.firstname === firstname && person.lastname === lastname) {
      let totals = {
        ok: true,
        totalPrice: 0,
        totalPages: 0,
      };
      for (const book of person.books) {
        totals.totalPrice += book.price;
        totals.totalPages += book.pages;
      }
      return totals;
    }
  }
  return {
    ok: false,
    totalPrice: 0,
    totalPages: 0,
  };
}

console.log(getTheTotals("Matt", "River"));

console.log("----Total----");

// let getTtoal = (firstname, lastname) => {
//   let ok = false;
//   for (let person of library)
//     if (person.firstname === firstname && person.lastname === lastname) {
//       ok = true;
//       let totalPages = 0;
//       let totalPrice = 0;
//       for (let book of person.books) {
//         totalPrice = totalPrice + book.price;
//         totalPages = totalPages + book.price;
//       }
//       return { ok: ok, totalPrice: totalPrice, totalPages: totalPages };
//     }
//   return {};
// };
console.log(getTheTotals("Matt", "River"));

function getTheOwnerOfBook(bookName) {
  const found = [];
  for (const person of library) {
    for (const book of person.books) {
      if (book.name === bookName) {
        found.push(`${person.firstname} ${person.lastname}`);
      }
    }
  }
  return found;
}

console.log(getTheOwnerOfBook("Adventures of a programmer"));

// let bookOwner = (bookName) => {
//   let found = [];
//   for (let person of library) {
//     let nameOwner = `${person.firstname} ${person.lastname}`;
//     for (let book of person.books)
//       if (book.name === bookName) {
//         found.push(nameOwner);
//       } else {
//         found;
//       }
//   }
//   return found;
// };
console.log(bookOwner("Testing ABC"));

function getAllBooks(substringInName) {
  const found = [];
  for (const person of library) {
    for (const book of person.books) {
      if (book.name.includes(substringInName)) {
        found.push({
          firstname: person.firstname,
          lastname: person.lastname,
          book: book,
        });
      }
    }
  }
  return found;
}

module.exports = {
  getBooksOfPerson,
  getTheNamesOfBooks,
  getTheTotals,
  getTheOwnerOfBook,
  getAllBooks,
};
