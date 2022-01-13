//Object

//Exercise 1.
/*
Usando el ejemplo del paraguas del video anterior, vea si puede seguir el open() método de ejemplo y crear el close() método.
¡Está bien si tienes problemas al principio! Entraremos en más detalles más adelante en esta lección.
*/
const umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if(umbrella.isOpen === false){
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia close the umbrella!"
        }
    }
};

console.log(umbrella.open());
console.log(umbrella.close());

//Example
//A person in an Object
const person = {
    name: "Anthony",
    lastName: "Tineo Cabreja",
    age: 26,
    parents: ["Juan Ramon Tineo", "Epifania Del Rosario Cabreja"],
    siblings: ["Keila", "Wilmer"],
    favoriteColor: "Blue",
    pets: true,
    job: () => {return "Anthony is a Software developer"}
}

console.log(`Mi madre se llama ${person.parents[1]}`);
console.log(`What's the Anthony job?\n${person.job()}`);

//Exercise 2.
/*
Cree un breakfastobjeto para representar el siguiente elemento de menú:
    The Lumberjack - $9.95
    eggs, sausage, toast, hashbrowns, pancakes
El objeto debe contener propiedades para name, pricey ingredients.
*/

const breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(`The name of breakfast is: ${breakfast.name}`);
console.log(`The price is: ${breakfast.price}`);
console.log(`The ingredients are: ${breakfast.ingredients}`);

//Exercise 3.
/*
Usando el objeto dado.
Agregue un printAccountSummary()método que devuelva el siguiente mensaje de cuenta:
Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/
const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: () => {
        return `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%`;
    }
};

console.log(savingsAccount.printAccountSummary());

//Exercise 4.
/*
Use el forEach()método para recorrer la matriz e imprimir los siguientes resúmenes de anillos usando console.log.
*/
const donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach((donut) => { console.log(`${donut.type} donuts cost $${donut.cost} each`)});