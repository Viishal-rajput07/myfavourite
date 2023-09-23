// OBJECT PART-2

let obt = new Object()                            // another way to used to declare object
let obj = {}
obj.name = 'vishal'
obj.age = 17
// console.log(obj)

// some more obj properties to get from object
// console.log(Object.keys(obj))                  // Returns an array of key of properties of an object
// console.log(Object.values(obj))                // Returns an array of values of properties of an object
// console.log(Object.entries(obj))               // Returns an array of key/values of properties of an object
// console.log(obj.hasOwnProperty('age'))         // Determines whether an object has property with name.

// Now to add objects
let obj1 = {a: 1, b: 2}
let obj2 = {c: 3, d: 4}

// console.log(Object.assign({}, obj1, obj2))   // recommended to give empty curly braces first
// console.log({ ...obj1, ...obj2})             // most used

const obj4 = [
    {
        age: 2,
        id: 4,
    },
    {
        age: 10,
        id: 5,
    },
    {
        age: 20,
        id: 6,
    },
]

console.log(obj4[0].age)

// DESTRUCTURING OF OBJECTS IN JS

const obj5 = {
    name: 'Ram',
    age: 1.5
}

const {age} = obj5;                             // destructuring of age from obj5
const {age: a, name:n} = obj5;                  // we can give our own name
console.log(a, n)