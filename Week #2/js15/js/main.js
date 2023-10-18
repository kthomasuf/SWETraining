// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
comsole.log(myArray[myArray.length - 1]);

// adding to array
myArray.unshift(42);
myArray.push("school");

// removing from array
const firstItem = myArray.shift();
const lastItem = myArray.pop();

// remove from middle
delete myArray[1];
// leaves slot empty

// replace with splice
myArray.splice(1, 1, 42);

// remove with splice
myArray.splice(1, 1);

// array methods
const testArray = ["A", "B", "C", "D", "E", "F"];
const newArray = testArray.slice(2, 5);
newArray.reverse();
const newString = testArray.join();
const stringArray = newString.split(",");

// combined arrays
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const combinedArrayA = myArrayB.concant(myArrayA);
const combinedArrayB = [...myArrayA, ...myArrayB];