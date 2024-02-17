function fibonacci (n) {
    // the sum of two number 
    // adding until reach the n number
    // it will start at 0 and 1 
    // so countinue add onto index 2

    let fib = [0,1]

    for (let i = 2; i < n; i++) {
        //fib at next index
        //fib[2] = fib[0] + fib[1]
        //fib[3] = fib[1] + fib[2]
        fib[i] = fib[i - 2] + fib[i - 1]
    }

    return fib
}

// console.log(fibonacci(2)) //[0,1]
// console.log(fibonacci(5)) //[0,1,1,2,3]

function factional (n) {
    // multible the n number with the numbers before n
    // set default number to 1 
    // use for loop to get the number from 1 to n number
    // multiple all the numbers with the default number

    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i
    }
    return fac
}

console.log(factional(5))