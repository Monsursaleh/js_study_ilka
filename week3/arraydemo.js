'use strict';
             //0 1 2 3 4
const numbers=[1,2,3,4,5];

console.log(numbers);

console.log(numbers[0]);
console.log(numbers[2]);

console.log(numbers[0]+numbers[2]);
console.log('length is ',numbers.length);

numbers[10]=123;
console.log(numbers,numbers.length);
numbers[5]=6;
console.log(numbers, numbers.length);
numbers.length=5;
console.log(numbers, numbers.length);
numbers.length=10;
console.log(numbers, numbers.length);
numbers.length=5;
console.log(numbers, numbers.length);
numbers.push(6);
console.log(numbers, numbers.length);
console.log(numbers.pop());
console.log(numbers, numbers.length);
console.log(numbers.pop());
console.log(numbers, numbers.length);

//sum of numbers
let sum=numbers[0]+numbers[1]+numbers[2]+numbers[3];
console.log('sum=',sum);

for(let i=0; i<4;i++){
    console.log(`numbers[${i}]=${numbers[i]}`);
}

sum=0;
for(let i=0;i<4;i++){
    sum=sum+numbers[i];
}
console.log(`${numbers.join(' + ')} = ${sum}`);


let resultString='';
sum=0;
for(let i=0;i<4;i++){
    sum+=numbers[i];
    resultString+=numbers[i];
    if(i<3){
        resultString+=' + ';
    }
}
console.log(resultString+' = '+sum);

numbers.push(5);
sum=0;
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(sum);

sum=0;
for(const number of numbers){
    // console.log(number);
    sum+=number;
}
console.log(`${numbers.join(' + ')} = ${sum}`);