/*
Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) y
que sabremos si se llevaron a cabo con éxito o no.
*/

const promise = new Promise((resolve, reject) => {
    const FLAG = 4;
    if(FLAG == 5) {
        resolve('Success')
    }else {
        reject(new Error('Internal Server Error 500'))
    }
})

promise
.then(response => console.log(response))
.catch(err => console.timeLog(err))