// OBJECT IN JS

//INTERVIEW Q => use a symbol variable as key in objects
let sym = Symbol('123')

let obj = {
    name: 'visahal',
    age: 20,
    'aao guru': 'hmm',
    [sym]: 'symbol'
}

// obj.email = 'text@gamil.com'
// console.log(obj.name)              // this is used to access object but in some exception cases sqr bracket used
// console.log(obj['aao guru'])       // this is how we can access all types of objects key value

// console.log(obj.sym)               // this will not give access to symbol key, and type of this is string
// console.log(obj[sym])              // this will give access to symbol key, and type of this is symbol

// obj.age = 19                       // this is how we can update or add new value
// console.log(obj)

// Object.freeze(obj)                 // prevent modification and updation of object
// obj.age = 9
// console.log(obj)                   // here age will not change because object.freeze is used

obj.greetings = function () {           // adding a function to object
    console.log('hello')
}

obj.greet = function () {               // adding a function and using this to access the name key from oobject
    console.log(`hello, ${this.name}`)
}
console.log(obj.greet())


