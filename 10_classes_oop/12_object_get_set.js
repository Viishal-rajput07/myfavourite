const User = {
    _email: 'v@var.com',
    _password: '123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)