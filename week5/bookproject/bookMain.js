'use strict';

const {
    getBooksOfPerson,
    getTheNamesOfBooks,
    getTheTotals,
    getTheOwnerOfBook,
    getAllBooks
} = require('./bookstorage');

console.log(getBooksOfPerson('Leila','Hökki'));
console.log("########## Matts books ##########")
console.log(getBooksOfPerson('Matt', 'River'));
console.log("########## nobodys books ##########")
console.log(getBooksOfPerson('no','body'));

console.log('############### book names ##########');
console.log(getTheNamesOfBooks('Matt','River'));
console.log("######");
console.log(getTheNamesOfBooks('Leila', 'Hökki'));
console.log("######");
console.log(getTheNamesOfBooks('Vera', 'River'));
console.log("######");
console.log(getTheNamesOfBooks('x', 'y'));

console.log('####### totals #########');
console.log(getTheTotals('Leila','Hökki'));
const result=getTheTotals('Matt','River');
console.log(result);
if(result.ok){
    console.log(`Pages: ${result.totalPages}, price: ${result.totalPrice}`);
}
else{
    console.log('Not found');
}

console.log('########## owners #######');
console.log(getTheOwnerOfBook('ABC'));
console.log(getTheOwnerOfBook('x'));
console.log(getTheOwnerOfBook('Programming JavaScript'));

console.log('####### getAllBooks #######');
console.log(getAllBooks('ABC'));
console.log('########## Progr ##########');
console.log(getAllBooks('Progr'));
console.log('########## progr ##########');
console.log(getAllBooks('progr'));
console.log('########## rogr ##########');
console.log(getAllBooks('rogr'));
console.log('########## x ##########');
console.log(getAllBooks('x'));