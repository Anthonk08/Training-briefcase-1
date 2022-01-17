//Function normal
const miFuncion1 = function(valor) {
    return valor;
}
console.log(miFuncion1('Hola mundo'));

//Arrow function
//Opcion 1
let miFuncion2 = valor => {
    return valor;
}
console.log(miFuncion2('Anthony practica Arrow functions'));

//Opcion 2
let miFuncion3 = valor => valor;
console.log(miFuncion3('Arrow function simplificared'));

//Funciones de dos parametros
//Primero
const sumar1 = function(num1, num2) {
    return num1 + num2;
}
console.log(sumar1(5,10));

//Segundo
const sumar2 = (num1, num2) => {return num1 + num2;}
console.log(sumar2(25,5));

//Funciones que retornen mensajes
//Primero
const saludar1 = function () {
    return "Hola mundo1";
}
console.log(saludar1());

//Segundo
const saludar2 = () => "Hola mundo2";
console.log(saludar2());

//Funciones que retornen un mensaje desde una variable
//Primero
let miSaludo1 = function (miSaludo) {
    let saludar = `Hola mi nombre es ${miSaludo}`;
    return saludar
}
console.log(miSaludo1("Anthony"));

//Segundo
let miSaludo2 = miSaludo => {
    let saludar = `Hola me llamo ${miSaludo}`;
    return saludar;
}
console.log(miSaludo2('keila'));

//Funciones que envien objetos
//Primero
let obtenerlibro1 = function(id) {
    return {
        id: id,
        nombre: "Juego de tronos"
    }
}
console.log(obtenerlibro1(1010));

//Segundo
let obtenerLibros2 = id => ({id, nombre: "Metro 2033"});
console.log(obtenerLibros2(6060));
