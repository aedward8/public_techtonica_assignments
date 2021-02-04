// Create some dates in JavaScript. - Create your Birthday - Can you format/print a date in different formats?

let current = new Date();
console.log(current)

// My birthday with JS Date Time

let myBirthday = new Date(1993,2,17)
console.log(myBirthday)

let myBirthday2 = new Date("March 17,1993")
console.log(myBirthday2)

// Moment is no longer used 
// let current2 = moment().locale();
// console.log(current2)
// let current3 = moment().format('LT');
// console.log(current3)

// Using Luxon
//var dt = DateTime.local(2017, 5, 15, 8, 30);
const { DateTime } = require("luxon");
var now = DateTime.local();
console.log(now)

var dt = DateTime.local(2017, 5, 15, 8, 30);
console.log(dt)

//If you add (date1 + date2) or subtract (date1 - date2) two dates in JavaScript, it returns the time difference in milliseconds. Can you write a function to subtract two dates but return the time difference in minutes? What about as a date object?
function dateDiff(date1,date2) {
    
    console.log('time in minutes '+(date1-date2)/60000)
    return new Date(date1-date2)

}

let mynotBday = new Date(1993,2,17);
let bday = new Date(1993,3,17);
// returns time in minutes

console.log(dateDiff(bday,mynotBday))