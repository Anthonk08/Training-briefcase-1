
//Destructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
/*
console.log(personaje[0]);
console.log(personaje[1]);
console.log(personaje[2]);
*/

// Con las comas le decimos la posicion que queremos del arreglo
const [ , , pj3 ] = personajes;
console.log( pj3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, num ] = retornaArreglo();
console.log(`Las ${letras} son las 3 primeras letras del abecedario, mientras ${num} son los primeros numeros positivos`);

// Tarea
// 1- El primer valor del arr se llamara nombre
// 2- El otro se llama setNombre
const usestate = ( value ) => {
    return [ value, () => {console.log('Esto sigue siendo un arreglo')} ]
} 

const [ nombre, setNombre] = usestate( 'Goku' );
console.log(nombre);
setNombre();