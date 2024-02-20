class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}@123`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@gmail.com', 'abc')
// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())

// Behind the scene

function anotherUser(username, email, password){
    this.username = username;
    this.email = email
    this.password = password
}

anotherUser.prototype.encryptPassword = function(){
    return `${this.password}@123`
}
anotherUser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new anotherUser('tea', 'tea@gmail.com', 'abc')
console.log(tea.encryptPassword());
console.log(tea.changeUserName());