// Spread operator
// Otra forma de concatenar
// ARRAYS
const autos1 = ['Toyota', 'Audi', 'Bentley', 'Bugatti'];
const autos2 = ['Lamborghini', 'Porsche', 'SEAT', 'Skoda'];

const autosConcatenate = [...autos1, ...autos2];

console.log(autosConcatenate);

// Objects
const user = {
    name: 'Anthony',
    lastName: 'Tineo Cabreja',
}

const address = {
    street: 'main street 123',
    city: 'bogota',
}

const userInfo = {...user, ...address};
console.log(userInfo);