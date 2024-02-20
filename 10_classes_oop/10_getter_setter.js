class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get password(){
        return this._password.toLowerCase();
    }

    set password(value){
        this._password = value
    }
}

const customer = new User('vishal', 'shyamA123')
console.log(customer.password)