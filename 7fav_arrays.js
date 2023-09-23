const arr1 = [1,2,34,5,78,9]

// console.log(arr1.slice(1,4))   //give a new array but not change the original array
// console.log(arr1) 

// console.log(arr1.splice(1,4))   //remove array items and change the original array and return the ramaining array items
// console.log(arr1) 

let mc = ["Thor", "Ironman", "Thanos"]
let dc = ["Batman", "Superman", "flash"]

// We should not use push method to join two array because it insert a array inside array

// we can use here concat method
// console.log(mc.concat(dc))

// There is also another and preffered method => spread opertor
console.log([...mc, ...dc])

const arr = [1,2,3,[4,5],[6,7,[5,6,7]]]  
 
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(arr.flat(Infinity))

// console.log(Array.isArray(arr))            // check the array exits or not return boolean
// console.log(Array.from('vihs;'))           // Creates an array from an iterable object
// console.log(Array.from({name: 'vihsal'}))

let a = 1
let b = 2
let c = 3

console.log(Array.of(a,b,c))                 // Returns a new array from a set of elements.




