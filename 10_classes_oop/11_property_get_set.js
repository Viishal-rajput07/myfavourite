function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
        this._email = value.toLowerCase()
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toLowerCase();
        },

        set: function(value){
        this._password = value
        }
    })
}


const constumer = new User('raj@example.com', 'QWERTY')
console.log(constumer.email)
console.log(constumer.password)