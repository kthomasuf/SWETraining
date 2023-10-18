// var, let, and const

// global scope
var x = 1;
let y = 2;
const z = 3;

// local scope 
{
  let y = 4;
}

// local scope
function myFunc() {
  const z = 5;
  console.log(z);

  // local scope
  {
  let y = 4;
  }
}

myFunc();

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myNewFunc() {
  var x = 10; // function scoped
  const z = 5;

  {
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }

  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}