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
