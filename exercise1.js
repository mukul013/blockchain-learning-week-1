// - Declare variables to represent your name, age, and city of residence, and log them to the console.
// - Try declaring variables using **`let`**, **`const`**, and **`var`**, and observe the differences.

const name = "Mukul Rawat"
let age = 23
var city = "Delhi"

console.log(name  , age , city)

name = "Batman" //comment this before running because we cannot change value const variable
age = 30
city = "Gotham"

console.log(name  , age , city) //here we will see updated value of age and city

//curly braces is defined as scope
{
    var accountNumber = 1234
    let accountId = 5678
}

console.log(accountId) //comment this before running because let variable cannot be accessed outside the scope
console.log(accountNumber) //no error here because var variable can be accessed outside the scope