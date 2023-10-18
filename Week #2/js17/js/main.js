// Javascript Classes

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaType) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(`Here's your ${crust} ${this.#sauce} sauce ${size} pizza.`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);

// Factory Function (private variables)
/*
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  }
}
*/

// underscore is a naming convention to convey intended private
/*
class Pizza {
  constructor(pizzaType) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
}
*/

/*
class Pizza {
  constructor(pizzaType) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}

class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The Works";
  }
  slice() {
    console.log(`Our ${this.type} ${pizza} pizza has 8 slices.`);
  }
}

const mySpeacialty = new SpecialtyPizza("medium");
mySpeacialty.slice;
*/

/*
class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  bake () {
  console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust = "thin";
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
*/