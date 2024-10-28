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

//++++++++++++++++ Maths ++++++++++++++++++++++++++++

// Maths it's a kind of library 

//onsole.log(Math);
//console.log(Math.abs(-4)); // it's used to change the sign of negative no's to positive
//console
console.log(Math.round(4.6)); // it will round off the value according to natural maths rule 
// but if wewant to control the rounded off value to be the lower one or the higher one so we can use 
//console.log(Math.ceil(4.2)); // the value will be 5
//console.log(Math.floor(4.9)); // this will give value 4 
//console.log(Math.min(4,3,6,8)); // 3 answer
//console.log(Math.max(4,5,6,8)); // 8 answer

console.log(Math.random());)
console.log((Math.random()*10 + 1); // this gives us random vaalues between 1 and 10 => here .random guves random values bwtween 0 and 1 so we multiply by 10 and add 1 so that to avoid the values below 0\
console.log(Math.floor(Math.random()*10) + 1);// gives the value but the below ones randow values single didit and below values 

// now suppose we want random values between 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min +1)) + min ) // folmula for this situation 





