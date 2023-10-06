// Write a JavaScript function called calculateFactorial that takes a number 
// as a parameter and returns its factorial.


//using recursion
//multipying num with the recursive call to the num-1 
function calculateFactorial( num ){
    if(num == 0) return 1
    return num * calculateFactorial(num-1)  
}

console.log(calculateFactorial(5))
console.log(calculateFactorial(0))

//iterative method
// traversing through num to 1 and multiplying those to previous calculated factorial
function calculateFact( num ) {
    let fact = 1
    for(let i=num ; i>=1 ; i--){ 
        fact *= i
    }

    return fact
}

console.log(calculateFact(5))
console.log(calculateFact(0))
