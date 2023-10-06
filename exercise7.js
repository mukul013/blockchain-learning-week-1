// Write a JavaScript function called fibonacci that takes a number n as a 
// parameter and returns the nth number in the Fibonacci sequence.


function fibonacci( num ){
    if(num == 0 )  return 0
    
    if(num == 1 ) return 1
    else{
        let prev  = 0
        let current = 1

        //here I am calculating sum of prev and current element & making it current and making prev to previous current.
        for (let index = 2; index <= num; index++) {
            let temp = current
            current += prev
            prev = temp
        }

        return current
    }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(5))