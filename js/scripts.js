// Business logic:
function Pizza() {
  this.size=0;
  this.toppings = [];
  this.totalPrice=0;
}

Pizza.prototype.setSize=function (pizzaSize) {
  this.size=pizzaSize;
}

Pizza.prototype.addToppings=function(toppingName){
  this.toppings.push(toppingName);
}

Pizza.prototype.calculatePizzaPrice=function(){
  let toppingsTotalPrice=0;
  this.toppings.forEach(function(topping){
    toppingsTotalPrice+=topping.toppingPrice;   
  });
  this.totalPrice=this.size.sizePrice+toppingsTotalPrice;
  console.log(this.totalPrice);
}

function Size(pizzaSize, sizePrice) {
  this.pizzaSize = pizzaSize;
  this.sizePrice = sizePrice;
}

function Topping(toppingName, toppingPrice) {
  this.toppingName = toppingName;
  this.toppingPrice = toppingPrice;
}

let pizza = new Pizza();
//pizza sizes
let small = new Size('10"', 9.5);
let medium = new Size('12"', 10.5);
let large = new Size('14"', 12);

//pizza toppings
let salami = new Topping("Salami", 1.5);
let parmesan = new Topping("Parmezan", 1);
let basil = new Topping("Basil", 0.5);
let pesto = new Topping("Pesto", 1);

pizza.setSize(medium);
pizza.addToppings(salami);
pizza.addToppings(pesto);
pizza.calculatePizzaPrice();

// User interface logic:

$(document).ready(function () {



  event.preventDefault();

});
