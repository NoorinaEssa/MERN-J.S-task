//stack(primitives), Heap (non primitibes)

let userOne = {
    email : "nooressa@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo = userOne
userTwo.email =  "noor123@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);