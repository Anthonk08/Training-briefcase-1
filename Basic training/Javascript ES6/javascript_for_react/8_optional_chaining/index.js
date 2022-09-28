// Optional Chaining
// Acceder a un valor si existe y sino muestrame undefined
const person = {
    name: 'Anthony',
    address: {
        city: 'Santiago de los caballeros',
    },
    location: {}
}

console.log(person.location?.city);