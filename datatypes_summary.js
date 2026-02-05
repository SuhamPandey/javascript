// Primitives

// 7 types: String, Number, Boolean, Null, Undefined, Symbols, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; 

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid);

// const bigNumber =  4657498412187984241n


//Non-primitives

// Array, Objects, Functions

const heros = ["thor", "hulk", "captain"] ;          //array

let myObj = {                                        //objects  
    name : "suham",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof id)

