/*
Rest parameters, a function can be called with any number of arguments, no matter how it is defined.
function sum(a, b) {
    return a + b;
}

alert( sum(1, 2, 3, 4, 5) );
There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero
o más argumentos (para llamadas de  función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde
cero o más pares de valores clave (para literales Tipo Objeto) son esperados.

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
*/
//utilizamos el iterador rest el cual realiza un arry simple de los valores agregados a la funcion, se debe agregar a los parametros: ...
function addNumbers(...number) {
    return number.reduce((sum, num) => {
        return sum += num;
    });
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//OTRO EJEMPLO
const defaultColors = ['red', 'green'];
const favoriteColors = ['blue', 'black'];

//Usando spread
console.log([ ...defaultColors, ...favoriteColors]);

//Otra forma
let allColor = [ ...defaultColors, ...favoriteColors];
console.log(allColor);
