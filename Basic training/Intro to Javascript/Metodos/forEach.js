//USE OF forEach() loop.
let refrescos = ["Pepsi", "Coca cola", "Sprice", "Canada Drink"];
function gustosRefrescos(refresco){
    refresco += " me gusta!"
    refresco = refresco.toUpperCase();
    console.log(refresco);
}

refrescos.forEach(gustosRefrescos);

/*
Las matrices tienen un conjunto de métodos especiales para ayudarlo a iterar y realizar operaciones en colecciones de datos. Puedes ver la lista de la documentación de MDN de los métodos Array aquí , pero un par de los más importantes que debes conocer son los métodos forEach()y map().
*/
/*
El forEach()método le brinda una forma alternativa de iterar sobre una matriz y manipular cada elemento de la matriz con una expresión 
de función en línea.
*/
let donutss = ["jelly donut", "chocolate donut", "glazed donut"];

donutss.forEach(function(donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
});

/*Parámetros
La función que le pasa al forEach() método puede tomar hasta tres parámetros. En el video, estos se llaman element, indexy array, pero puedes llamarlos como quieras.

El forEach()método llamará a esta función una vez para cada elemento de la matriz (de ahí el nombre forEach). Cada vez, llamará a la función con diferentes argumentos. El elementparámetro obtendrá el valor del elemento de la matriz. El indexparámetro obtendrá el índice del elemento (empezando por cero). El arrayparámetro obtendrá una referencia a toda la matriz, lo cual es útil si desea modificar los elementos.

Aquí hay otro ejemplo:
*/
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
    console.log("Word " + num + " in " + all.toString() + " is " + word);
});

/*
Impresiones:
El que esta en la ubicacion 0 en la matriz: cat,in,hat es cat
El que esta en la ubicacion 1 en la matriz: cat,in,hat es in
El que esta en la ubicacion 2 en la matriz: cat,in,hat es hat
*/

//Exercise 1.
//Use el forEach() método de la matriz para recorrer la siguiente matriz y agregar 100 a cada uno de los valores si el valor
// es divisible por 3.

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(num, index){
    if(num % 3 == 0){
        num += 100;
        test[index] = num;
    }
});
console.log(test);

