// Business logic----------------------------------------------------------------------------------------
//Business logic for Pizza
function Pizza() {
  this.sizePrice = 0;
  this.toppingPrices = [];
  this.totalPrice = 0;
}

Pizza.prototype.setSize = function (pizzaSizeID) {
  this.sizePrice=0;
  for (i = 0; i < sizeList.sizes.length; i++) {
    if (pizzaSizeID === sizeList.sizes[i].id) {
      this.sizePrice = sizeList.sizes[i].sizePrice;
    }
  }
}

Pizza.prototype.addToppings = function (toppingIDs) {
  this.toppingPrices = [];
  for (i = 0; i < toppingIDs.length; i++) {
    for (j = 0; j < toppingList.toppings.length; j++) {
      if (toppingIDs[i] === toppingList.toppings[j].id) {
        this.toppingPrices.push(toppingList.toppings[j].toppingPrice);
      }
    }
  }
}

Pizza.prototype.calculatePizzaPrice = function () {
  let toppingsTotalPrice = 0;
  this.toppingPrices.forEach(function (topping) {
    toppingsTotalPrice += topping;
  });
  this.totalPrice = this.sizePrice + toppingsTotalPrice;
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

// User interface logic---------------------------------------------------------------------

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
let parmesan = new Topping("Parmesan", 0.9);
let basil = new Topping("Basil", 0.5);
let pesto = new Topping("Pesto", 1.1);

let toppingList = new ToppingList();
toppingList.addTopping(salami);
toppingList.addTopping(parmesan);
toppingList.addTopping(basil);
toppingList.addTopping(pesto);

//Displays checklist with possible sizes to user 
function displayPizzaSizeList(SizeListToShow) {
  let pizzaSizeSelect = $("select#sizes");
  htmlForPizzaSizeList = "";
  SizeListToShow.sizes.forEach(function (size) {
    htmlForPizzaSizeList += "<option value=" + size.id + ">" + size.pizzaSize + " - $" + size.sizePrice + "</option>"
  })
  pizzaSizeSelect.html(htmlForPizzaSizeList);
}

//Displays checkboxes with possible toppings to user 
function displayPizzaToppingList(toppingListToShow) {
  let pizzaToppingSelect = $("div#toppings");
  htmlForPizzaToppingList = "";
  toppingListToShow.toppings.forEach(function (topping) {
    htmlForPizzaToppingList += "<label for=" + topping.id + "></label><input id='topping' type='checkbox' value=" + topping.id + ">" + topping.toppingName + ": $" + topping.toppingPrice + "</label><br>";
  })
  pizzaToppingSelect.html(htmlForPizzaToppingList);
}

//Displays result statement with pizza's cost
function displayPizzaTotalPrice() {
  let pizzaTotalPriceSelect = $("div#result");
  htmlForPizzaTotalPrice = "<h2>Your Pizza will cost you $" + pizza.totalPrice + "!</h2>";
  pizzaTotalPriceSelect.html(htmlForPizzaTotalPrice);
}

$(document).ready(function () {
  displayPizzaSizeList(sizeList);
  displayPizzaToppingList(toppingList);

  $("form#check-price").submit(function (event) {
    event.preventDefault();
    const choosenPizzaSizeID = parseFloat($("select#sizes").val());
    const choosenPizzaToppingIDs = $("#toppings input:checkbox:checked").map(function () {
      return parseFloat($(this).val());
    }).get();

    pizza.setSize(choosenPizzaSizeID);
    pizza.addToppings(choosenPizzaToppingIDs);
    pizza.calculatePizzaPrice();
    displayPizzaTotalPrice();
  });

});
