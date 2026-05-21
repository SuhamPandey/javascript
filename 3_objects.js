// singleton : declared through constructor
//objects literals

// Object.create

const mysym = Symbol("key1")
const JsUser = {
    name: "suham",
    "full name": "suham Pandey",
    [mysym]: "mykey1",
    age: 23,
    location: "nepal",
    email:"suham@gmail.com",
    isloggedIN: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

JsUser.email = "pandey@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "suham@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);     //gives function return back ,,,, function is not executed only its reference is returned 


JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);   //same object lai refernce garna "this" use garxan
}
console.log(JsUser.greetingTwo()); 
JsUser.greetingTwo()