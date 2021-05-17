/*
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
*/
//Suma
const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const suma = numbers1.reduce((sum, number) => sum += number);
console.log(suma);

//Resta
const numbers2 = [100, 50, 20, 5];
const resta = numbers2.reduce((rest, number) => rest -= number);
console.log(resta);

//Multiplicacion
const numbers3 = [1, 5, 10];
const multiplicacion = numbers3.reduce((mult, number) => mult *= number);
console.log(multiplicacion);

//Division
const numbers4 = [50, 5, 2];
const division = numbers4.reduce((div, number) => div /= number);
console.log(division);


