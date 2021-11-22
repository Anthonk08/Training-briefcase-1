/*
Balanced Brackets.
Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean
indicating whether the given string contains a valid nesting of braces.

for ... of: ejecuta un bloque de código para cada elemento de un objeto iterable,
como lo son: String, Array.
EJEMPLO:
let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31

pop(): elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
EJEMPLO:
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"

push(): añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
EJEMPLO #1:
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

EJEMPLO #2:
const animals = ['pigs', 'goats', 'sheep', "cows"];
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

*/

const balancedBrackets = str => {
    if(str.length % 2 != 0){
        return false;
    }

    const parentesis = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let grupoParentesis = [];
    for(let letra of str) {
        if(parentesis[letra]){
            grupoParentesis.push(parentesis[letra]);
        }else {
            if(grupoParentesis.pop() !== letra) {
                return false;
            }
        }
    }
    return (!grupoParentesis.length)
}

console.log(balancedBrackets("({[]})")); //true
console.log(balancedBrackets("({[{))]})")); //false
console.log(balancedBrackets("({[{}[()]]})")); //true

//Utilizar con mas frecuencia o ===, !==
//Esta fuerte