/***      THIS KEYWORD AND ARROW FUNCTION        ***/

/* Inside a object we used function in order to access to the value obj this keyword is used */
const obj = {
  name: "ram",
  welcome: function () {
    console.log(`hello ${this.name}`);
    console.log(
      this
    ); /* this will refrence to the context which is object here*/
  },
};
// console.log(this)                                  /*  The global object of this is window and type is object*/
// obj.welcome()
// obj.name = 'shyam'
// obj.welcome()

/* Below all three function will give you the undefined value  */

function chai() {
  let a = 3;
  console.log(this.a);
}
// chai()

let tea = function () {
  let a = 3;
  console.log(this.a);
};
// tea()

let coffee = () => {
  let a = 3;
  console.log(this.a);
};
// coffee()

/* In 1st we not need return keyword because of parentheses whereas in 2nd we used return because of curlybraces */
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(1, 2));

const addTwo2 = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo2(1, 2));
