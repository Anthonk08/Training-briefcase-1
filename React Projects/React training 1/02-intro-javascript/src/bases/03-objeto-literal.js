
/*Esto es un objeto, tiene un prototipe quie es como el adn, tiene una serie de propiedades */

const persona = {
    nombre: 'Anthony',
    apellido: 'Tineo',
    edad: 27,
    direccion: {
        calle: 'Vanessa Ramirez Fana',
        ciudad: 'Santiago de los caballeros',
        provincia: 'Santiago',
        zip: 665544878,
        lat: 12.8888,
        lng: 50.2525,
    }
};

//console.table(persona);
console.log(persona);

// Persona 2
const persona2 = {...persona};
persona2.nombre = 'Keila';
console.log(persona2);