//Learning how to use map().
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

let numbers = [1,2,3,4,5,6,7,8,9];
let doubledNumbers = [];

//forma antigua
console.log('Usando un for');
for(let i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
};

console.log(doubledNumbers);

//Forma usando map().
console.log('Usando map');
let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

//Otro ejercicio utilizando map.
let cars = [
    {car: 'Toyota', price: 'Cheap'},
    {car: 'Ferrari', price: 'Expensive'}
];

let prices = cars.map(function(car){
    return car.price;
});

console.log(prices);

//Forma correcta
const persona = [
    {nombre: 'Anthony', apellido: 'Tineo Cabreja', edad: 25, numero: 8092411598},
    {nombre: 'Keila', apellido: 'Tineo Cabreja', edad: 22, numero: 8095462354},
    {nombre: 'Rosario', apellido: 'Cabreja Cabrera', edad: 54, numero: 8296544528},
    {nombre: 'Ana Lucia', apellido: 'Cabreja Cabrera', edad: 45, numero: 8096547893}
];

const nombre = persona.map(person => person.nombre);
console.log(nombre);

const apellido = persona.map(person => person.apellido);
console.log(apellido);

const edad = persona.map(person => person.edad);
console.log(edad);

const numero = persona.map(person => person.numero);
console.log(numero);

//Otra forma correcta
const numbers = [1,2,3,4,5,6,7,8,9];
let num2 = numbers.map(num => num*2);
console.log(num2);