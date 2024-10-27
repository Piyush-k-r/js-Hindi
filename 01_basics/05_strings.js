const name = "piyush"
const repoCount = 50

// console.log(name + repoCount + " value"); => old way 
// new way also called as string interpolation 

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Piyushhc')

//console.log(gameName[0]);
//console.log(gameName.__proto_); // it contains alot of functions

//console.log(gameName.length);
//console.log(gameName.toUpperCase()); // in functions se original values change nahi hui ha
console.log(gameName.charAt(2)); // what character is at the given index 
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) // it takes negative values too it means the for the example it will count from thr last of the string "ite"
console.log(anotherString);

// trimn method
const newStringOne = "      piyush      "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the extra spaces lieft during writing the string 
                                  //If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).


// replace method

const url = "https://piyush.com/piyush%20kumar"

console.log(url.replace('%20','-')) // output => https://piyush.com/piyush-kumar => the first value is the one we want to replace with the second value we give
// includes method tells us whether a substring is present or not in the given String

console.log(url.includes('piyush'))
