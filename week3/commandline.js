'use strict';

//console.log(process.argv);
const args=process.argv;

for(let i=0;i<args.length;i++){
    console.log(`args[${i}]=${args[i]}`);
}

console.log(args.length);

if(process.argv.length<3){
    console.log('no arguments');
}
else{
    console.log(`${process.argv.length-2} arguments`);
}

const [,,...numberstrings]=process.argv;
console.log(numberstrings);

for(let n=2;n<process.argv.length;n++){
    console.log(process.argv[n]);
}

let sum=0;
for(const num of numberstrings){
    sum+= +num; //Number(num)
}
console.log(sum);