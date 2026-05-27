
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("H");
    console.log("A");
    console.log("M");

}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }
// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2        //lines below return are not executed
}

const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);

function loginUserMessage(username){
    
    return `${username} just logged in `
}
// console.log(loginUserMessage("suham"));

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage());

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("suham"));

function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200, 300 , 400));
function calculateCartPrice( ...num1){
    return  num1
}
// console.log(calculateCartPrice(200, 300 , 400));

const user = {
    username: "suham",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price: 655
})

const mynewarray = [200, 300, 400, 500]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200, 400, 600, 700]));
