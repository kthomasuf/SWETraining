// Conditionals: If Statements

// syntax

if (condition) {
  // run code
}
else {
  // run code
}

let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
  reply = "No soup for you!";
}
else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
}
else if (soup) {
  reply = `Here's your order of ${soup}`;
}
else {
  reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);

let testScore = 89;
let grade;

if (testScore >= 90) {
  grade = "A";
}
else if (testScore >= 80) {
  grade = "B";
}
else if (testScore >= 70) {
  grade = "C";
}
else if (testScore >= 60) {
  grade = "D";
}
else {
  grade = "F";
}