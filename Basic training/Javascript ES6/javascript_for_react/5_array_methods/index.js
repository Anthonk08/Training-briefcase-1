// Array methods
const names = ['Anthony', 'Keila', 'Rosario', 'Mama Chicha'];
const names2 = ['Ana lucia', 'Nicols', 'Molly'];
/*
for(let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}
*/
/*forEach()
El método ejecuta una función una vez para
cada elemento de un array.
*/
names.forEach((name) => {
    console.log(name);
})

/* map()
Este método crea una nueva matriz con los
resultados de llamar a una función
proporcionada en cada elemento de la
matriz que llama.*/
const newNames = names.map((name) => {
    return name;
})
console.log(newNames);

/* find()
Este metodo es utilizado para encontrar o
buscar un elemento
*/

const findName = names.find((name) => {
    if(name == 'Anthony') {
        return name;
    }
})
console.log(findName);

/* filter() 
Nos permite crear un nuevo arreglo con los 
elementos que cumplan una condicion
*/
const filterNames = names.filter((name) => {
    if(name != 'Keila') {
        return name;
    }
})
console.log(filterNames);

/* concat() 
se utiliza para fusionar dos o más matrices.
Este método no cambia las matrices 
existentes, sino que devuelve una nueva 
matriz.
*/
namesConcated = names.concat(names2);
console.log(namesConcated);