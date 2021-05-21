/*
    El objeto Promise (Promesa) es usado para computaciones asíncronas.
    Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

    Una función con los argumentos resolver y rechazar. La función ejecutor es ejecutada inmediatamente por la implementación de la Promesa,
    pasándole las funciones resolver y rechazar (el ejecutor es llamado incluso antes de que el constructor de la Promesa devuelva el objeto
    creado). Las funciones resolver y rechazar, al ser llamadas, resuelven o rechazan la promesa, respectivamente. Normalmente el ejecutor
    inicia un trabajo asíncrono, y luego, una vez que es completado, llama a la función resolver para resolver la promesa o la rechaza
    si ha ocurrido un error.

    Si un error es lanzado en la función ejecutor, la promesa es rechazada y el valor de retorno del ejecutor es rechazado.
*/

//Promesas que se ejecutan directamente
const p1 = Promise.resolve(1)
console.log(p1);

p1
    .then(x => x + 5)
    .then(x => Promise.resolve(x + 5))
    .then(x => Promise.reject('Se fue a la puta, algo no anda bien'))
    .then(x => console.log('Esto no se va a llamar'))
    .catch(e => console.log(e));


//Promesas que se resuelven en el futuro.
const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 500)) //Se demora 500 milisegundos.
delayed(7)
    .then(x => {
        console.log(x)
        return delayed(x + 7)
    })
    .then(x => console.log(x))
    .then(x => Promise.reject('Hubo un error!!'))
    .catch(e => console.log(e))


//Promesas utilizando Fetch
/*Las PROMESAS tienen 3 estados:
    'unresolved' esta esperando algo para terminar.
    'resolved' Algo termino y esta todo bien.
    'rejected'  Algo termino y salio algo mal.
*/

//Promesas
//Then and catch
promise1 = new Promise((resolve, reject) => {
    resolve();
})

promise1
.then(() => console.log('Termino!'))
.then(() => console.log('Yo tambien estoy corriendo'))
.catch(() => console.log('Hubo un error!!'))

