// MATH IN JAVASCRIPT

console.log(Math.abs(-3))        // ABS or Absolute value this will give always a positive value
console.log(Math.round(4.6))     // round will give a roundof value
console.log(Math.ceil(4.3))      // it give a above value of argument
console.log(Math.floor(4.3))     // it will give lower value of argument
console.log(Math.min(4,3,25,6))  // shows the minimun value of all argument
console.log(Math.max(4,3,25,6))  // shows the maximun value of all argument 
console.log(Math.random())       // generates a random number btw 0 and 1

// To generate random number btw 1 to 10
console.log(Math.floor((Math.random() * 10) + 1))


// TASK TO GENERATE A RANDOM NUMBER BETWEEN 10 TO 100
const min = 10
const max = 100
console.log(Math.floor((Math.random() * (max-min+1)) + min))
