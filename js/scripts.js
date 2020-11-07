// Business logic:
//Business logic for Pizza
function Pizza() {
  this.size = 0;
  this.toppings = [];
  this.totalPrice = 0;
}

Pizza.prototype.setSize = function (pizzaSize) {
  this.size = pizzaSize;
}

Pizza.prototype.addToppings = function (toppingName) {
  this.toppings= toppingName;
}

Pizza.prototype.calculatePizzaPrice = function () {
  let toppingsTotalPrice = 0;
  console.log(this.toppings);
  this.toppings.forEach(function(topping) {
    console.log(topping);
    //console.log(topping.toppingPrice);
    toppingsTotalPrice += toppings.toppingPrice;
    //console.log(toppingsTotalPrice);
  }); 
 // console.log(toppingsTotalPrice);
  this.totalPrice = this.size.sizePrice + toppingsTotalPrice;
}

//Business logic for Size and SizeList
function Size(pizzaSize, sizePrice) {
  this.pizzaSize = pizzaSize;
  this.sizePrice = sizePrice;
}

function SizeList() {
  this.sizes = [];
  this.sizeID = 0;
}
SizeList.prototype.addSize = function (size) {
  size.id = this.AssignID();
  this.sizes.push(size);
}
SizeList.prototype.AssignID = function () {
  this.sizeID += 1;
  return this.sizeID;
}

//Business logic for Topping and ToppingList
function Topping(toppingName, toppingPrice) {
  this.toppingName = toppingName;
  this.toppingPrice = toppingPrice;
}
function ToppingList() {
  this.toppings = [];
  this.toppingID = 0;
}
ToppingList.prototype.addTopping = function (topping) {
  topping.id = this.AssignID();
  this.toppings.push(topping);
}
ToppingList.prototype.AssignID = function () {
  this.toppingID += 1;
  return this.toppingID;
}

//Main Business logic
let pizza = new Pizza();
//pizza sizes
let small = new Size('10"', 9.5);
let medium = new Size('12"', 10.5);
let large = new Size('14"', 12);

let sizeList = new SizeList();
sizeList.addSize(small);
sizeList.addSize(medium);
sizeList.addSize(large);

//pizza toppings
let salami = new Topping("Salami", 1.5);
let parmesan = new Topping("Parmezan", 0.9);
let basil = new Topping("Basil", 0.5);
let pesto = new Topping("Pesto", 1.1);

let toppingList = new ToppingList();
toppingList.addTopping(salami);
toppingList.addTopping(parmesan);
toppingList.addTopping(basil);
toppingList.addTopping(pesto);


//pizza.setSize(medium);


//pizza.calculatePizzaPrice();

// User interface logic:
function displayPizzaSizeList(SizeListToShow) {
  let pizzaSizeSelect = $("select#sizes");
  htmlForPizzaSizeList = "";
  SizeListToShow.sizes.forEach(function (size) {
    htmlForPizzaSizeList += "<option value=" + size.sizePrice + ">" + size.pizzaSize + "</option>"
  })
  pizzaSizeSelect.html(htmlForPizzaSizeList);
}

function displayPizzaToppingList(toppingListToShow) {
  let pizzaToppingSelect = $("div#toppings");
  htmlForPizzaToppingList = "";
  toppingListToShow.toppings.forEach(function (topping) {
    htmlForPizzaToppingList += "<label for=" + topping.id + "></label><input id='topping' type='checkbox' value=" + topping.toppingPrice + ">" + topping.toppingName + ": " + "$" + topping.toppingPrice + "</label><br>";
    console.log(htmlForPizzaToppingList);
  })
  pizzaToppingSelect.html(htmlForPizzaToppingList);
}


$(document).ready(function () {
  displayPizzaToppingList(toppingList);
  displayPizzaSizeList(sizeList);
  $("form#check-price").submit(function (event) {
    event.preventDefault();
    const choosenPizzaSize = $("select#sizes").val();

    const choosenPizzaToppings = $("#toppings input:checkbox:checked").map(function () {
      return parseFloat($(this).val());
    }).get();
    pizza.setSize(choosenPizzaSize);
    pizza.addToppings(choosenPizzaToppings);
    //console.log(pizza.size);
    //console.log(pizza.toppings);
    pizza.calculatePizzaPrice();
    //console.log(pizza.totalPrice);
  });

});
