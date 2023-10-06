// Write a JavaScript function called isPalindrome that takes a string as a 
// parameter and returns true if the string is a palindrome and false if it is not.

function isPalindrome(str){
    return str.toLowerCase() == str.split("").reverse().join("").toLowerCase()

    //converting string to lowercase otherwise "Madam" will give false
    //split function split the string into array
    //reverse function reverses the array
    //join funcition joins back the array into string
    //after that we compare those using == operator
}

console.log(isPalindrome("Madam")) // should return true
console.log(isPalindrome("12321")) // should return true
console.log(isPalindrome("Hello")) // should return false