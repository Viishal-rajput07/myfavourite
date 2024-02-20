const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, isloggedin, password){
    this.username = username;
    this.isloggedin = isloggedin;
    this.password = password;

    this.greeting = function(){
        console.log(`Good morning ${this.username}`)
    }
}

const userOne = new User('vishal', true, 123)
const userTwo = new User('hitesh', false, 321)
console.log(userOne)
console.log(userTwo)