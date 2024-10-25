let score = "33"

//console.log(typeof score);
//console.log(typeof(score))

//let valueInNumber = Number(score)  // Number is aclass which changes any value into number
//console.log(typeof valueInNumber);

// just in case if we conver a string like this "3abc" with the help of Number then its type wll be changed but ifn we try to print it it will show 'NaN' not a number value
// just if we use null in score vriable then it will show 0 if we change null to number

// if in score we use true or false (boolean) it will print 1 for true and 0 for false
  


// "33" => 33
// "33abc" => NaN
//  true => 1 ; false => 0


let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn) // Boolean convert it itno boolean value
//console.log(booleanIsLoggedIn);

// if we use 0 at the place of 1 in isLoggedIn the it will give me false 
//if i give anystrng t thr place of 1 then it will give me true
//"" => for empty strings we also get false

//****************************Operations**************************** 

 let value = 3
 let negvalue = -value
 //console.log(negvalue);


//  console.log(2+2);
//  console.log(2-2); 
 //console.log(2*2);
 //console.log(2**3); meaning to the power of **
 //console.log(2/3);
 //console.log(2%3);  remainder 

let str1 = "piyush"
let str2 = " Pandey"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" +2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //  the whole operation will be threated in the same way the first data is of which data type 

// console.log( 1 + 2 + "2"); //in this case  1 is number so it will be added to 2 but the "2" will added by just writing it 

// console.log((3+4) * 5 %3)

let gameCounter = 100
++gameCounter ;
console.log(gameCounter);

// sippose to study ecma type conversion js