// const tinderUser = new Object()     //singleton object
const tinderUser={}                 //non singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "suham",
            lastname:"pandey"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a", 2:"b", 3:"c"
}
const obj2 = {
    4:"a", 5:"b", 6:"c"
}

// const obj3 = {obj1, obj2}
// const obj3= Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"sp@gmail.com"
    },
    {
        id:1,
        email:"p@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));        //keys lai array maa convert garxa
// console.log(Object.values(tinderUser));      //values lai array maa convert garxa
// console.log(Object.entries(tinderUser));     //harek key value lai array maa convert garxa

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js learning",
    price:"999",
    courseInstructor: "suham"
}

// course.courseInstructor

// const {courseInstructor} = course 
const {courseInstructor: instructor} = course 
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "suham",
//     "coursename" : "js learning continues", 
//     "price" : "free"
// }


