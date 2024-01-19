let score = true

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN
//TRUE => 1; FALSE=>0

let isLoggedIn = "Noor"
let booleanIsLoggedIn =  Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
// 1=>true; 0=>fasle
// ""=>false
//"noor"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


let value = 3
let negvalue = -value
//console.log(negvalue);

// console.log(2+2);
// console.log(2-2);  // are the simple operation
// console.log(2%2);

let strt1 = "hello"
let strt2 = "Noor"

let strt3 = strt1 + strt2
console.log(strt3);

console.log("1"+ 2);
console.log(1 + "2");
console.log("1" + 2 + 2);


console.log((3 + 4) * 5 % 3); 



//comparison of datatypes in javascript

console.log(2>1)
console.log(2>=1)
console.log(2==1)

console.log("2">1)
console.log("02">1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined == 0);
console.log(undefined=== 0);
console.log(undefined > 0);

// strick check simply === equal check
console.log(undefined=== 0);