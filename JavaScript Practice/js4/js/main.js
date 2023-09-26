// Numbers

// An integer is a whole number.
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;

const myString = "42";

console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myString));

console.log(isNaN("Dave"));
console.log(Number.isNaN("Dave"));