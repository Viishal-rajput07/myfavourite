function setUsername(username){
    this.username = username
    console.log('called')
}

function createUser(name, email, password){
    setUsername.call(this, name)
    this.email = email
    this.password = password 
}

const chai = new createUser('chai', 'chai@chai.com', '123')
console.log(chai)