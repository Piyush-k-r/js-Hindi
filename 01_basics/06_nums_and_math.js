const score = 400
console.log(score);

const balance = new Number(100)  // we are specifying that we are taking a number as a value , generally javascript do this automatically but we can specify the data type likr this

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // gives the decimal value till accourding to the number mentioned if I use 1 then 23.5 , if T use 2 then 23.55

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2)); // it gives us the round of value for a decmila if used properly or used for rounding off the number but if we mention the round of number to be at the middle of the given no then it will give atpata output exponential output for ex:- for 1123.8966 if we use => console.log(otherNumber.toPrecision(3)); --> 1.12e+3

const hundreds = 100000
console.log(hundreds.toLocalString('en-IN')); // ==> 10,00.000

