const user = {
    username:"suham",
    price:222,

    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to website`);    
        // console.log(this);
    }

} 

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "suham"
//     console.log(this.username);
// }
// chai()

// const chai= function(){
//     let username= "suham"
//     console.log(this.username)
// }
// chai()

// const chai= () =>{
//     let username= "suham"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1 + num2    OR
// const addTwo = (num1, num2) => (num1 + num2)
// console.log((addTwo(3,5)));

const addTwo = (num1, num2) => ({username:"suham"})
console.log((addTwo(3,5)));

const myarray = [2,4, 6 ,3 ,1]

