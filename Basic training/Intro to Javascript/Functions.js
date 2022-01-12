//Functions

//Exercise 1.
function reverseString(reverseMe) {
    let reversed = "";
    for(let i = reverseMe.length - 1; i >= 0; i--){
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log("Hello, " + reverseString("Keila") +"!! \nMy name is "+ reverseString("Anthony") +" nice to met you!!");


//Exercise 2.
//Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

function laugh(num) {
    let laughs = "";
    for(let i = 1; i <= num; i++) {
        laughs += "Ha ";
    }
    return laughs;
}

console.log(laugh(10));

//Exercise 3.
function sumApp(num) {
    return mulApp(num) - num*2;
}

function mulApp(num) {
    return num * num;
}

let number = sumApp(10);
console.log(number);


//Exercise 4.
/*creará una función llamada buildTriangle()que aceptará una entrada (el triángulo en su ancho más ancho) y
devolverá la representación de cadena de un triángulo.*/

function makeLine(length) {
    let line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(num){
    let aste = "";
    for(let i = 1; i <= num; i++) {
        aste += makeLine(i);
    }
    return aste;
}

console.log(buildTriangle(10));

//Funcion de expresion es una funciona anonima dentro de una variable.
let catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

console.log(catSays(3));

//Hacer callback en una function
let dogSay = function(num) {
    let ladra = "";
    for(let i = 0; i <= num; i++){
        ladra += "woaf ";
    }
    return ladra;
}

function jugarConPerro(llamarFuncion) {
    return "El perro hace " + llamarFuncion(5);
}

console.log(jugarConPerro(dogSay));


//En caso de que quieras llamar una funcion con nombre dentro de otra.
let favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
};

function movies(messageFunction, name) {
    messageFunction(name);
}

movies(favoriteMovie, "Scarface");