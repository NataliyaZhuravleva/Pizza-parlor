# <span style="color:#0ec2b8">_Pizza Parlor_</span>

#### _Pizza Parlor app, 11/06/2020_

#### By _**Nataliya Zhuravleva**_

## <span style="color:#0ec2b8">Description</span>

_A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy) and a size to order a pizza and see the final cost._


## <span style="color:#0ec2b8">Setup/Installation Requirements</span>
### <span style="color:#c4f4ef">View Online</span>
_Visit [ webpage](https://nataliyazhuravleva.github.io/Pizza-parlor/) at https://nataliyazhuravleva.github.io/Pizza-parlor/_ to view application on GitHub pages._

### <span style="color:#c4f4ef">Open Locally</span>
1. _Navigate to my [ repo](https://github.com/NataliyaZhuravleva/Pizza-parlor) at https://github.com/NataliyaZhuravleva/Pizza-parlor_ to view the project files and commits.
2. _Click on the green button labeled "Code"_ to copy repository URL.
3. _Clone the repository to your local machine_ by opening your machine terminal and using the command "git clone https://github.com/NataliyaZhuravleva/Pizza-parlor".
4. _Click on index.html file_ to view application.



## <span style="color:#0ec2b8">Known Bugs</span>

_No known bags_

## <span style="color:#0ec2b8">Support and contact details</span>

_If you have any questions, ideas or concerns, please, contact me at [natalindria@gmail.com](mailto:natalindria@gmail.com)_


## <span style="color:#0ec2b8">Technologies Used</span>

* _VisualStudio Code_
* _Git_
* _GitHub_
* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## <span style="color:#0ec2b8">Specs</span>

| Test | Input | Output |
| :---------------- | :------------------| :--------------- |
| _Size (pizzaSize, sizePrice)_ | | | 
| Should create an instance of Size | let medium = new Size('12"', 10.5); | medium = Size {pizzaSize: "12"", sizePrize: 10.5} |
| _Topping (toppingName, toppingPrice)_ | | | 
| Should create an instance of Topping | let basil = new Topping("Basil", 0.5);| basil === Topping {toppingName: "Basil", toppingPrice: 0.5} |
|_setSize (pizzaSize)_ | | | 
| Should set pizza's size to instance of Pizza | pizza.setSize (medium) | pizza.size === {pizzaSize: "12"", sizePrice: 10.5} |
|_addTopings (toppingName)_ | | | 
| Should add pizza's topping names to instance of Pizza | pizza.addToppings (salami) | pizza.toppings === {toppingName: "Salami", toppingPrice: 1.5} |
|_calculatePizzaPrice ()_ | | | 
| Should calculate pizza price | pizza.setSize(medium); pizza.addToppings(salami); pizza.addToppings(pesto); pizza.calculatePizzaPrice(); | 13 |
|_SizeList.prototype.addSize ()_ | | | 
| Should add size to SizeList array| sizeList.addSize(small); | sizeList.sizes[0] = {pizzaSize: "10"", sizePrice: 9.5, id: 1} |
|_ToppingList.prototype.addTopping ()_ | | | 
| Should add topping to ToppingList array| toppingList.addTopping(salami); | toppingList.toppings[0] = {toppingName: "Salami", toppingPrice: 1.5, id: 1} |
|_displayPizzaToppingList ()_ | | | 
| Should show checkboxes with toppings| displayPizzaToppingList(toppingList) | Checkboxes for Salami: $1.5, Parmesan $0.9, Basil: $0.5, Pesto: $1.1 |
|_displayPizzaSizeList ()_ | | | 
| Should show checklist with sizes| displayPizzaSizeList(sizeList) | Checklist for 10", 12", 14" |



### <span style="color:#0ec2b8">License</span> 

*This software is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license*

Copyright (c) 2020 **_Nataliya Zhuravleva_**
