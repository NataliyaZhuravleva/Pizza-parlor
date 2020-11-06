// Business logic:
function Pizza() {
  this.size = 0;
  this.toppings = [];
  this.totalPrice = 0;
}

Pizza.prototype.setSize = function (pizzaSize) {
  this.size = pizzaSize;
}

Pizza.prototype.addToppings = function (toppingName) {
  this.toppings.push(toppingName);
}

Pizza.prototype.calculatePizzaPrice = function () {
  let toppingsTotalPrice = 0;
  this.toppings.forEach(function (topping) {
    toppingsTotalPrice += topping.toppingPrice;
  });
  this.totalPrice = this.size.sizePrice + toppingsTotalPrice;
}

function Size(pizzaSize, sizePrice) {
  this.pizzaSize = pizzaSize;
  this.sizePrice = sizePrice;
}

function SizeList(){
  this.sizes=[];
  this.sizeID=0;
}
SizeList.prototype.addSize=function(size){
size.id=this.AssignID();
this.sizes.push(size);
}
SizeList.prototype.AssignID=function(){
  this.sizeID+=1;
  return this.sizeID;
}

function Topping(toppingName, toppingPrice) {
  this.toppingName = toppingName;
  this.toppingPrice = toppingPrice;
}
function ToppingList(){
  this.toppings=[];
  this.toppingID=0;
}
ToppingList.prototype.addTopping=function(topping){
topping.id=this.AssignID();
this.toppings.push(topping);
}
ToppingList.prototype.AssignID=function(){
  this.toppingID+=1;
  return this.toppingID;
}

let pizza = new Pizza();
//pizza sizes
let small = new Size('10"', 9.5);
let medium = new Size('12"', 10.5);
let large = new Size('14"', 12);

let sizeList= new SizeList();
sizeList.addSize(small);
sizeList.addSize(medium);
sizeList.addSize(large);

//pizza toppings
let salami = new Topping("Salami", 1.5);
let parmesan = new Topping("Parmezan", 0.9);
let basil = new Topping("Basil", 0.5);
let pesto = new Topping("Pesto", 1.1);

let toppingList=new ToppingList();
toppingList.addTopping(salami);
toppingList.addTopping(parmesan);
toppingList.addTopping(basil);
toppingList.addTopping(pesto);


//pizza.setSize(medium);


//pizza.calculatePizzaPrice();

// User interface logic:
// function displayPizzaSizes(pizzaSizesToShow) {
//   let pizzaSizeSelect("select#sizes");
//   htmlForPizzaSizes = "";
//   pizzaSizesToShow.pizzaSize.forEach(function () {
//     htmlForPizzaSizes += "<option value=" + pizzaSize + ">"
//   })


//}
function displayPizzaToppingList(toppingListToShow) {
  let pizzaToppingSelect = $("div#toppings");
  htmlForPizzaToppingList = "";
  toppingListToShow.toppings.forEach(function (topping) {
    htmlForPizzaToppingList += "<label for=topping.toppingName></label><input type='checkbox'>" + topping.toppingName + ": " + "$" + topping.toppingPrice + "</label><br>";
  })
  pizzaToppingSelect.html(htmlForPizzaToppingList);

}


$(document).ready(function () {
  displayPizzaToppingList(toppingList);


  event.preventDefault();

});
