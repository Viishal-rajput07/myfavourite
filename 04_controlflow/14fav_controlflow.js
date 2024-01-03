/* CONTROLFLOW IN JS */

/*
There are two types of values known as 'truthy' and 'falsy' 

TRUTHY = '0', 'false', " ", [], {}, function(){}
FALSY = false, "", 0, -0, Bigint 0n, null, undefined, NaN
*/

/* Arrays */
let arr = [];

if (arr.length === 0) {
  // console.log('Array is Empty')
} else {
  console.log("Array has length");
}

/* Object */
let obj = {};

if (Object.keys(obj).length === 0) {
  // console.log('object is Empty')
} else {
  console.log("object has length");
}

/*
false == 0
false = ''
0 = ''
*/
if (0 == "" && false == 0 && false == "") {
  // console.log(true)
}

/* NULLISH COALESCING  OPERATOR (??): null, undefined*/
let val1;
// val1 = 5 ?? 10                            /* 5*/
// val1 = null ?? 10                         /* 10*/
// val1 = undefined ?? 11                    /* 11*/
// val1 = undefined ?? 10 ?? 11              /* 10 */
val1 = null ?? false ?? undefined;           /* false */

// console.log(val1)

/* Here 'break' keyword is important othervise it wil print all cases below it when the correct case is matched*/
const cup = 1;
switch (cup) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;

  default:
    console.log(false);
    break;
}
