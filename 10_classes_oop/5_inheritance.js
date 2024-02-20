class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com")
chai.logMe()

const masalaChai = new User("masalachai", "chai@teacher.com")
masalaChai.logMe()
// masalaChai.addCourse()  // throw an error, cannot access power of child class


console.log(chai instanceof Teacher)
console.log(chai instanceof User)