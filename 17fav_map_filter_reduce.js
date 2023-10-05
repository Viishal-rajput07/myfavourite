/**** Map, Filter and reduce ****/

/***** Reduce *****/
/* Returns the elements of an array that meet the condition specified in a callback function*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greater_5 = nums.filter((num) => num > 5);
// console.log(greater_5)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const bookFilter = books.filter( (bk)=>{
//  return bk.genre === 'Non-Fiction'
// })

const bookFilter = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

// console.log(bookFilter)

/*******   Map  *********/
/* Calls a defined callback function on each element of an array, and returns an array that contains the results. */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => {return num + 10})

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

// console.log(newNums)

/********** Reduce **********/
/*Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function. */

const myNums = [1, 2, 3, 4, 5, 6];
const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const PricePay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(PricePay);
