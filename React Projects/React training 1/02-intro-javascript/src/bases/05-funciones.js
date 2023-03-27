
// Funciones

// Funcion normal
const saludar = function ( nombre ) {
    return `Hola, ${nombre}`;
};

// Funcion flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

// Funcion flecha optimizada
const saludar3 = (nombre) => `Hola, ${nombre}`;

// Ejemplo 2
const saludar4 = () => `Hola Juan!!`;

// Ejemplo usado en React
const getUser = () => {
    return {
        id: 'ABC123',
        username: 'anthonyGaming',
    }
}
// Mostrar objetos y arreglos sin poner los corchetes del cuerpo de la funcion flecha
const getUser2 = () =>
    ({
        id: 'DEF456',
        username: 'keilaGaming',
    });

// Tarea
// 1- Transformar a una funcion flecha
// 2- Tiene que retornar un objeto implicito
// 3- Que funciones
/*
function getUserActivo( nombre ) {
    return {
        id: 'ABC567',
        username: nombre
    }
}
*/

const getUserActivo = (name) => ({ id:'ABC567', username: name, });

const usuarioActivo = getUserActivo('Rosario mi mama');
//Se imprimira como el primer resultado en la consola
console.log(usuarioActivo);



// Impresion
console.log(saludar('Anthony'));
console.log(saludar2('Keila'));
console.log(saludar3('Rosario'));
console.log(saludar4());
console.log(getUser());
console.log(getUser2());