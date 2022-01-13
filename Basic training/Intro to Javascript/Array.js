//Arreglos o Matrices
//Una matriz es útil porque almacena múltiples valores en una única estructura de datos organizada.
//Puede definir una nueva matriz enumerando los valores separados por comas entre corchetes
/*
    Ejemplo
    let num = [1,2,3,4,5];
*/

//Matrices anidadas
/*
const arraysInArrays = [[1, 2, 3],
                        ["Julia", "James"],
                        [true, false, true, false]
                        ];
*/

//Exercise 1.
/*
Cree una matriz llamada udaciFamilyy agregue "Julia", "James" y su nombre a la matriz. Luego,
imprima el archivo udaciFamilyen la consola usando console.log.
*/
const udaciFamily = ["Julia", "James", "Anthony"];
console.log(udaciFamily);

//Exercise 2.
/*
Cree una matriz llamada crew para organizar la tripulación de Serenity y configúrela igual a las siguientes variables.
No necesita escribir las cadenas reales, solo use las variables provistas.
    var captain = "Mal";
    var second = "Zoe";
    var pilot = "Wash";
    var companion = "Inara";
    var mercenary = "Jayne";
    var mechanic = "Kaylee";
Luego, imprima la crewmatriz en la consola.
*/
const crew = ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"];
console.log(crew);

//Exercise 3.
/*
Comenzando con esta matriz de prices, cambie los precios de los elementos 1, 3 y 7 de la matriz.
let prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
Luego, imprima la pricesmatriz en la consola.
*/

let prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[1] = 5.00;
prices[3] = 10.00;
prices[7] = 20.00;

console.log(prices);

/*
Array.length
Puede encontrar la longitud de una matriz usando su lengthpropiedad.

let donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);
El resultado es: 3
*/

/*las matrices tienen bastantes métodos integrados para agregar y eliminar elementos de una matriz.
Los dos métodos más comunes para modificar una matriz son push()y pop().*/

//Push
//Puede usar el push()método para agregar elementos al final de una matriz .
let numbers = [1,2,3,4,5];
console.log(numbers.push(6));
console.log(numbers);

//Pop
//Alternativamente, puede usar el pop()método para eliminar elementos del final de una matriz .
let donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
donuts.pop();
console.log(donuts);

//Splice
//splice() es otro método útil que le permite agregar y eliminar elementos desde cualquier lugar dentro de una matriz.
/*Si bien push()y lo pop()limita a agregar y eliminar elementos del final de una matriz , le splice()permite especificar
la ubicación del índice para agregar nuevos elementos, así como la cantidad de elementos que desea eliminar (si corresponde). */
let names = ["Anthony", "Keila", "Rosario", "Olegaria"];
names.splice(1,0, "Laura", "Jose");
//primer numero posicion, segundo numeros los campos que se borraran hacia la derecha, si pones 0 no se borra ninguno.
console.log(names);
names.splice(0,1,"Leo");
console.log(names);


//Exercise 4. Splice
/*
James estaba creando una matriz con los colores del arcoíris y olvidó algunos colores. Los colores estándar del arco iris generalmente se enumeran en este orden:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
pero James tenía esto:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
Usando solo el splice()método, inserte los colores que faltan en la matriz y elimine el color "Blackberry"siguiendo estos pasos:

Eliminar "Blackberry"
Agregar "Yellow"y"Green"
Agregar "Purple"
*/

let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"Purple");
console.log(rainbow);

//Excercise 5.
/*Considere la siguiente matriz.
let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

Cree una función llamada hasEnoughPlayers()que tome la teammatriz como argumento y devuelva true o false dependiendo de si la matriz tiene al menos siete jugadores. */

function hasEnoughPlayers(array){
    return array.length >= 7;
}

let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

//Exercise 6.
/*
En un ejercicio anterior, creó una crewmatriz para representar al equipo de Mal del exitoso programa Firefly.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
Más adelante en la serie, Mal adquiere tres nuevos miembros de la tripulación nombrados "Simon", "River"y "Book". Use el push()método para agregar los tres nuevos miembros de la tripulación a la crewmatriz.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
*/
let crewReturn = ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"];
crewReturn.push("Simon");
crewReturn.push("River");
crewReturn.push("Book");
console.log(crewReturn);

//Exercise 7.
//Revertir la matriz dada
let reverseMe = ["A","n","t","h","o","n","y"];
console.log(reverseMe.reverse());

//Excercise 8.
//Organizar la matriz numerica.
let sortNumbners = [2, 1, 8, 7, 6];
console.log(sortNumbners.sort());

//Exercise 9.
//Borrar el primer elemento de una matriz;
let numbersOrganice = ["Anthony", 1, 2, 3, 4, 5];
console.log(numbersOrganice.shift()); //Shift presenta la variable borrada
console.log(numbersOrganice);

//Exercise 10.
//¿Qué método sería mejor para cambiar esta matriz en una cadena?
let turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
turnMeIntoAString.join('');

//Array loop
let cars = ["Un", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
function loopArray(array) {
    for(let i = 0; i < array.length; i++){
        array[i] += " Anthony";
        console.log(array[i] = array[i].toUpperCase());
    }
}
loopArray(cars);



