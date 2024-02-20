const promiseOne = new Promise(function (resolve, reject) {

     // Do an async task
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is completed ')
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise consumed')
})

new Promise(function (resolve, raject) {
    setTimeout(function () {
        console.log('Async task 2')
        resolve()
    }, 1000)
})
.then(function () {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000);
})
promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "vishal", password: "123" })
        }
        else {
            reject('Error: Something went wrong')
        }

    }, 1000);
})

promiseFour
    .then(function (user) {
        console.log(user)
        return user.username
    })
    .then(function (username) {
        console.log(username)
    })
    .catch(function (err) {
        console.log(err)
    })
    .finally(function () {
        console.log("The promise is either resolved or rejected")
    })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "shyam", password: "123" })
        }
        else {
            reject('OOPs: Something went wrong')
        }

    }, 1000);
})

async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         return data.name
//     })
//     .then((name)=>{
//         console.log(name)
//     })
//     .catch(() => {
//         console.log('error')
//     })

Promise.all([promiseOne, promiseThree, promiseFour])
    .then((value)=>{
        console.log(value)
    })
