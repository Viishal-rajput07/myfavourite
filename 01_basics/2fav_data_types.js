// THERE ARE TWO TYPES OF DATA TYPES

// 1. PRIMITIVE DATA TYPES => IT INCLUDES 7 TYPES
// NNBBSSU => number, null, boolean, bigint, string, symbol, undefined
let number = 5                   // 1. number  
let nul = null                   // 2. null
let bool = false                 // 3. boolean
let bigI = 12333333333334545n    // 4. bigint
let str = 'hello'                // 5. string
let symbols = Symbol('123')      // 6. symbol
let undef ;                      // 7. undefined

// 2. REFRENCE(NON-PRIMITIVE) DATA-TYPES
// => object, array, function

// 1. object
let obj = {
    name: "Vuhsl",
    age: 35
} 

// 2. array
let arr = [1, 2, "hello"]

// 3. function
let hello = function hey(){
    console.log('hey')
}

// Now we see the types of each data types
console.log(typeof number)   // number
console.log(typeof nul)      // object
console.log(typeof bool)     // boolean
console.log(typeof bigI)     // bigint
console.log(typeof symbols)  // symbol
console.log(typeof str)      // string
console.log(typeof undef)    // undefined
console.log(typeof obj)      // object
console.log(typeof arr)      // object
console.log(typeof hello)    // it will give 'function' but it suppose to be 'object function'
 
// ALL PRIMTIVES DATA TYPES ARE STORED IN STACK MEMORY AND ARE IMMUTABLE (DO NOT CHANGE ORGINAL RAFRENCE)
// WHILE NON-PRIMITES ARE STORED IN HEAP MEMORY AND ARE MUTABLE(CHANGE ORIGINAL REFRENCE)