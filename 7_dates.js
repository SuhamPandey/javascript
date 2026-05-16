let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());          //gives day month date year time
// console.log(myDate.toDateString());      //gives only day and which date like fri april 10 2026
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // gives month/date/year like 4/10/2026
// console.log(myDate.toLocaleString());     // gives month/date/year and time like 4/10/2026, 10:05:54 PM
// console.log(myDate.toLocaleTimeString());  // gives time like 10:05:54 PM
// console.log(typeof myDate);   //object


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);                // convert to seconds 
// console.log(Math.floor(Date.now()/1000));    // removes decimal value from seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);


newDate.toLocaleString('default', {
    weekday :  "long"

})

 

