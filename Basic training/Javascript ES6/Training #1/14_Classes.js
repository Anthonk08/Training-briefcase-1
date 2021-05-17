/*
Clases
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una
sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Definiendo clases
Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene
dos componentes: expresiones de clases y declaraciones de clases.

Declaración de clases
Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada class y
un nombre para la clase "Rectangulo".
*/

//Normal form
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'Beep';
};

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());