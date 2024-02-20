let favLang = ['js', 'python']
let str = 'vishal'
let heroPower = {
    thor: "hammer",
    virat: "anushka",

    getViratPower: function(){
        console.log(`Virat power is his wife ${this.virat}`)
    }
}

// console.log(heroPower.getViratPower())

Object.prototype.mahi = function(){
    console.log(`Mahi is present in all objects`);
}
Array.prototype.rohit = function(){
    console.log(`rohit is present in all array`);
}

// we declared mahi in objects then we can access it anywhere
// heroPower.mahi()
favLang.rohit()   
// str.rohit()  // throw an error because rohit is present in array 

// Inheritance

const User = {
    name: 'chai',
    email: 'chai@gmail.com'
}

const Teacher = {
    experiance: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// TASK :-- we have to define a method true length, we trim the string and then give length

let userName = "Vishal Rajput     "
String.prototype.trueLength = function () {
    // console.log(`${this}`)
    console.log(`True lenth is: ${this.trim().length}`)
}
userName.trueLength()
"  raj".trueLength()
"hello   ".trueLength()