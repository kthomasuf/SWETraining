// Loops

// while loop

let myNumber = 0;
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
}

let myName = "Kenny";
let counter = 0;
let myLetter;

while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "n") break;
  counter++;
}
console.log(counter);

// do while loop

do {
  myNumber += 2;
  console.log(myNumber);
} while (myNumber < 50);

// for loop

let name = "Dave";
for (let i = 0; i<= name.length; i++) {
  console.log(name.charAt(i));
}