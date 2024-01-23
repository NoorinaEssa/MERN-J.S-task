//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-23-2024")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));