// We can't change the value of Math.PI 

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

const chai = { 
    name: 'vishal',
    surname: 'rajput',
    middlename: 'singh'
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Now the name will not set to raj because 'writable' is false 
// chai.name = 'raj'
// console.log(chai.name)

for (let [key, value] of Object.entries(chai)) {
    console.log(key+ ' :> '+ value  )
}



