//Let and Const
var num1 = 1; //use in the function
let num2 = 1; //use in the block
const num3 = 1; // Use in the block, but read-only


//Object
const person = {
    name: "Anthony",
    //In an object functions are methods
    // walk: () => {},
    // talk: () => {}
    walk() {return `${person.name} is walking in the park`},
    talk() {return `${person.name} is talking to his girlfriend`}
}

console.log(person.walk());
console.log(person.talk());

//This
const person1 = {
    name: "Anthony",
    //NECESITO ESTUDIAR MAS ESTO, ES UN POCO COMPLICADO
}

//Arrows functions
//Normal funtion
const square = function(number){
    return number * number;
}

//Simplificared Arrow funtion
const square1 = number => number * number;
console.log(square1(5));

//Template literals o Plantillas literales. Using map()
const colors = ["Blue", "Red", "Green"];

const items = colors.map(color => `<li> ${color} </li>`);
console.log(items);

//Object destructuring
//Forma normal
const address = {
    street: "",
    city: "",
    country: ""
}

//const street = address.street;
//const city =  address.city;
//const country = address.country;

//New form
const { street, city, country} = address;

//Spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); //forma normal
const combined1 = [...first, ...second]; //Nueva forma