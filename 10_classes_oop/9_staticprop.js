class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username ${this.username}`)
    }

    static createId(){
        console.log(this.username +123)
    }
}

const vishal = new user('vishal')
// vishal.createId()

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.createId()