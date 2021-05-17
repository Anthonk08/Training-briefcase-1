/*
Los generadores son una alternativa poderosa: permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su
propio estado.

Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores.
Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis function*.
 */

//Generators for loops
//Ejemplo 1.
const colors = ['Blue', 'Red', 'Green', 'Pink', 'Brown', 'Yellow'];

for(let color of colors) {
    console.log(color);
};

//Ejemplo 2.
const numbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
let total = 0;
for(let number of numbers) {
    total += number;
}
console.log(total);

//Generator
function* numbers() {
    yield;
}
const gen = numbers();

console.log(gen.next());
console.log(gen.next());

