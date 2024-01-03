/******  FUNCTIONS IN JS WITH OBJECTS AND ARRAY  *******/

/** Usually this is type of function are used when we don't know how many argument could come  **/
function calculateCart(...num1){              /* Here ...num1 is called rest operator */
    return num1
}

// console.log(calculateCart(200, 300, 300))   


/* This is how we can give an object as a parameter */
const obj = {
    name: 'ram',
    age: 2
}

function handleObject(getObject){
      console.log(`the name is ${getObject.name} and age is ${getObject.age}`)
}

// handleObject(obj)

/* Another way to give object as argument */
// handleObject({
//     name: 'shyam',
//     age: 2
// })


/* This is how we can give an Array as a parameter */
const arr = [1, 2, 3, 4, 5]

function handleArray(getArray){
      console.log(getArray)
}

// handleArray(arr)

/* another way to give array as argument */
// handleArray([9,8,7,6,5])

