// Ecmascript mopdules
// modulos para dividir el codigo en diferentes archivos, se evita el codigo spaguetti
import {add, mult, title, active, points} from './add.js';
import addModule from './add.js';

console.log('Suma' + add(10, 5));
console.log('Resta' + mult(10, 5));
console.log(title, active, points);

// Muestro por consola lo que exporta por defecto mi add.js
// En este caso es js for React que es un title
console.log(addModule);