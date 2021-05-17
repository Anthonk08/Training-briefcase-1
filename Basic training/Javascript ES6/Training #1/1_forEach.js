//Learning how to use forEach.
//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

let colors = ['red', 'blue', 'black'];

colors.forEach(function(color){
	console.log(color);
});

//Create an Array of numbers
let numbers = [1,2,3,4,5,6,7,8,9];

//Create a variable to hold the sum
let suma = 0;

//Loop over the array, incrementing the sum variable
numbers.forEach(function(num){
	suma += num;
});

//Print the sum variable
console.log(suma);

//Forma correcta.
const persona = [
    {nombre: 'Anthony', apellido: 'Tineo Cabreja', edad: 25, numero: 8092411598},
    {nombre: 'Keila', apellido: 'Tineo Cabreja', edad: 22, numero: 8095462354},
    {nombre: 'Rosario', apellido: 'Cabreja Cabrera', edad: 54, numero: 8296544528},
    {nombre: 'Ana Lucia', apellido: 'Cabreja Cabrera', edad: 45, numero: 8096547893}
];

persona.forEach(person => console.log(person));

const numbers = [1,2,3,4,5,6,7,8,9];
let suma = 0;
numbers.forEach(num => suma += num);
console.log(suma);
