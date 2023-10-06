// Write a JavaScript function called hasUniqueChars that takes a string as 
// a parameter and returns true if the string has 
// all unique characters and false if it does not.

function hasUniqueChars( str ){

    //string does not contain sort function so converted it to array and then applied sorting and joined back to string 
    let sortedStr = str.split("").sort().join("")

    for(let i = 0 ; i<sortedStr.length ; i++){
        if(sortedStr[i] == sortedStr[i+1]) return false
    }

    return true
}

console.log(hasUniqueChars("abcd"))
console.log(hasUniqueChars("aabc"))
console.log(hasUniqueChars("abca"))