/*
Las variables constantes presentan un ámbito de bloque (block scope) tal y como lo hacen las variables definidas usando la instrucción let,
con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar.

La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente,
puede ser inicializada con algún valor.
*/

let num = 24;
num =  8;
console.log(num);

const value = 'Anton';
console.log(value);