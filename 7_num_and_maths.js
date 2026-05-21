const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.568
// console.log(otherNumber.toPrecision(3));

const otherNumbers = 123.568
// console.log(otherNumbers.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// -----------------------  MATHS  --------------------

// console.log(Math);
// console.log(Math.abs(-4));           //gives 4 as output
// console.log(Math.round(4.67));       //gives 5 by rounding off
// console.log(Math.ceil(4.2));         //gives ceiling value i.e 5
// console.log(Math.floor(4.2));        // gives floor value i.e 4
// console.log(Math.min(3, 2, 6, 1));   //gives minimum value from array 
// console.log(Math.max(3, 2, 6, 1));   //gives max value 

console.log(Math.random());             //gives random no betn 0-1
console.log(Math.random()*10);          //gives random no betn 0-1 , then multiply it by 10 to make it above 1 
console.log((Math.random()*10) + 1);      //sometimes 0.06 may happen and multiply also make 0.6 which doesnot exceed 1 so we add 1 
console.log(Math.floor(Math.random()*10) + 1); // gives floor value by removing digits after decimal

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);  
// max-min+1 gives range . math.random gives random no between 0-1.  math.floor removes digits after decimal. atlast we add +min so our result goes above min value








