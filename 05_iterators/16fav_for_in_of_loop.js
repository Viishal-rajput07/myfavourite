/* FOR IN AND FOR OF LOOP */

const arr = [1, 2, 3, "hello"];

for (const i of arr) {
  // console.log(i);
}
for (const i in arr) {
  // console.log(arr[i]);
}

const map = new Map();
map.set("In", "India");
map.set("Sk", "Shaktiman");
map.set("Hw", "Hello world");
map.set("C", "Chti@%");

// console.table(map)

for (const [key, value] of map) {
  // console.log(key +  ' :=> ' + value)
}

/* for in loop will not return anything */
for (const key in map) {
  // console.log(key, map[key] )
}

const obj = {
  name: "namuna",
  surname: "namunaUltra",
};

/* We can not iterate object using for of loop */
// for (const [key, value] of obj) {
// // console.log(key +  ' :=> ' + value)
// }

/* To iterate object we need to use for in loop */
for (const key in obj) {
  // console.log(key+ " and value is " +obj[key] )
}

/* For Each loop */

const lang = ["js", "py", "c", "cpp", "java"];

/* looping with foreach and passing a callback normal function , note: function is without name*/
lang.forEach(function (val) {
  // console.log(val)
});

/* looping with foreach and passing a callback arrow function, note: function is without name.Returns undefined*/
const language = lang.forEach((val) => {
  // console.log(val)
});
// console.log(language)

function languages(item) {
  // console.log(item);
}

/* Passing directly the pre written function */
lang.forEach(languages);

const myLang = [
  {
    langName: "JavaScript",
    langFile: ".js",
  },
  {
    langName: "python",
    langFile: ".py",
  },
  {
    langName: "c++",
    langFile: ".cpp",
  },
];

myLang.forEach((item) => {
  console.log(item.langName, item.langFile);
});
