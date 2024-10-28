//let myDate = new Date()
//console.log(myDate.toString
//());   // output => Mon Oct 28 2024 10:58:47 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString()); // output =>  Mon Oct 28 2024
//console.log(myDate.toLocaleString());//output => 10/28/2024, 11:02:01 AM
//console.log(typeof myDate); // My date ka datatype object ha

//let myCreatedDate = new Date(2023,0,23) // output => here we can se the syntx of how we can mention our won date adn yes the count of month start's from 0 that means 0=> jan ...and so onnnn
//console.log(myCreatedDate.toDateString());

// to mention the time with date we can use 
//let myCreatedDate = new Date(2023,0,23,5,3)
 //console.log(myCreatedDate.toLocaleString());//output => 1/23/2023, 5:03:00 AM
 
 let myCreatedDate = new Date("01-14-2023") // thr mm-dd-yyyy format
 //console.log(myCreatedDate.toLocaleString()); => output 1/14/2023, 12:00:00 AM
 
 let myTimeStamp = Date.now()
 
 //console.log(myTimeStamp);  // this gives the value in milisecond
 //console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now() / 1000)); // if we want value in secs then we divide by 1000 and for getting notba decimal value we useed floor here
 
