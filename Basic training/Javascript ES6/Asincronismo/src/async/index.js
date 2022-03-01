/*
La declaración de función async define una función asíncrona, la cual devuelve un objeto
*/

const resolveAfterToSecons = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved');
            //reject(new Error('Ha ocurrido un error!'))
        }, 2000);
    })
}

const asyncCall = async () => {
    try {
        const result = await resolveAfterToSecons()
        console.log(result);
    } catch(error) {
        console.error(error)
    }
}

asyncCall();