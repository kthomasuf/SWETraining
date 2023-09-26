// User Input

confirm("Ok === True\nCancel === False");

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
if (name.length) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
}
else {
  console.log(name ?? "You didn't enter your name.");
}