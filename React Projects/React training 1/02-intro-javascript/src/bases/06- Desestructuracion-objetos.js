
// Desestructuracion en REACT

const person = {
    name: 'Bruno Diaz',
    edad: 27,
    clave: 'Batman',
};

// Asignacion estructurante
// const {name, edad, clave} = person;
// console.log(`Hola mi nombre es ${name}, tengo  ${edad} y yo soy ${clave}`);

const useContext = ({ name, edad, clave, rango = 'Superheroe' }) => {
    //console.log(name, edad, rango);
    return {
        nombreClave: clave,  
        anios: edad,
        lating: {
            lat: 25.2525,
            ing: -18.0808,
        }
    }
}

const { nombreClave, anios, latIng: { lat, ing } } = useContext( person );
// Otra forma que es la mas comun
//const { lat, ing } = latIng;

console.log( nombreClave, anios );
console.log( lat, ing );

/*
console.log(person.name);
console.log(person.edad);
console.log(person.clave);
*/