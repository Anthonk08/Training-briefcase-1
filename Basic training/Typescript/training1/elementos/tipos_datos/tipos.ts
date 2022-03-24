// Tipos primitivos
//Heredados de JavaScript
// Boolean
let falso: boolean = false;
let verdadero: boolean = true;

// Numbers
let entero: number = 44;
let decimal: number = 26.05;
let hexadecimal: number = 0x545454;
let binario: number = 0b0101101;
let extremadamenteLargos: number = 7_111_00;

// String
let cadenas: string = "ajhnjsdds\ddsfdsf544";

//Tipos especiales TypeScript
// any
let cualquiera: any;
cualquiera = "una cadena";
cualquiera = false;

// Null
let nada : null = null;

// Undefined
let indefinido: undefined = undefined;

// void
// una funcion es void, cunado no retorna nada, cuando no tiene return.
function saludando() {
    console.log("Hola, Anthony!!");
}

// arrays
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let diasSemana: string[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let arrayDeCualquierCosa = [1, "Dos", 3, "Cuatro", 5];

// tuplas
let tupla: [numbre: string, edad: number, color: string] = ["Anthony", 26, "Azul"];

// Objetos
let objeto: {
    nombre: string,
    edad: number,
    pais: string,
    fechaNacimiento: Date,
    mascota: boolean,
    laboral: {
        empresa: string,
        sector: string
    },
} = {
    nombre: 'Anthony Tineo',
    edad: 26,
    pais: 'Republica Dominicana',
    fechaNacimiento: new Date(1995, 10, 8),
    mascota: true,
    laboral: {
        empresa: 'Intellisys',
        sector: 'Cerros de gurabo',
    }
};

objeto.nombre;
objeto.laboral.empresa;

// Tipado de un objeto
let objeto1: object = {
    nombre: 'Anthony Tineo',
    edad: 26,
    pais: 'Republica Dominicana',
    fechaNacimiento: new Date(1995, 10, 8),
}