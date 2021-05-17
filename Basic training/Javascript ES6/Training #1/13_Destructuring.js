/*
La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o 
propiedades de objetos en distintas variables.

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
*/

//Forma normal
const expense = {
    type: 'Business',
    amount: '45 USD'
}

//const type = expense.type;
//const amount = expense.amount;

//ES6
const { type, amount} = expense;
console.log(type);
console.log(amount);

//Otra forma
//Manera normal
const savedFiled = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
    return `The file ${file.name}${file.extension} is of size ${file.size} Bytes`;
}

console.log(fileSummary(savedFiled));

//Nueva forma
const savedFiled = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}) {
    return `The file ${name}${extension} is of size ${size} Bytes`;
}

console.log(fileSummary(savedFiled));

//Otra forma
const company = [
    'Google',
    'Facebook',
    'Uber'
];

const [name, name2, name3] = company;
console.log(name);
console.log(name2);
console.log(name3);