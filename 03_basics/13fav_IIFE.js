/* IIFE :=>  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ()()*/

/* IIFE funtion are invoked automatically but it does not know when the context is over  */
/* in that case we need to add semicolon ';' at the end of function  */
let a = 5;

(function chai() {
  console.log("chai aur code", a);
})();

(() => {
  console.log("code and chai");
})();

((name) => {
  console.log("chai aur code with", name);
})("ram");

/*
NOTES:
1) The first example is known as named function in IIFE 
2) The second example is known as without named function in IIFE 
3) In third exaple we see how to pass argument
*/
