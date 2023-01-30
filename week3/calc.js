'use strict';

const allowedOps = '+-x/';

if(process.argv.length!==5){
    console.log('Not enough data');
}
else{
    const [, , numberA, op, numberB] = process.argv;

    if(!allowedOps.includes(op)){
        console.log(`Wrong op. '${op}'. Use +, -, x or /`);
    }
    else{
        const first = +numberA; //Number(numberA)
        const second = Number(numberB); //+numberB

        let result;
        if (op === '+') {
            result = first + second;
        }
        else if (op === '-') {
            result = first - second;
        }
        else if (op === 'x') {
            result = first * second;
        }
        else if (op === '/') {
            result = first / second;
        }

        console.log(`${first} ${op} ${second} = ${result}`);
    }
}