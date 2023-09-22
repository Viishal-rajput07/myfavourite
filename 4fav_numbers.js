const num1 = 399
console.log(num1)

const num2 = new Number(150)
console.log(num2);

console.log(num2.toString().length)
console.log(num2.toFixed(2))

const num3 = 123.555;
console.log(num3.toPrecision(3))

const num4 = 100000000
console.log(num4.toLocaleString('en-IN'))

// toString       => to convert number into string then we can use any string methods on number
// toFixed        => to give exact number after decimal
// toPrecision    => to give precise value
// toLocaleString => to convert the string into readble format