/*Un callback es una función que se pasa a otra función como un argumento,
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. */

//Funcion B
function soyUnCallback(data) {
    console.log("\nSoy el callback, ahora me toca a mi.");
    console.log(data);
}

//Funcion A
function haciendoUnaPeticionHTTP(callback) {
    console.log("Estoy realizando otras operaciones!!");
    console.log("Ya casi termino!");

    callback({
        id: 1,
        userName: 'Anthony Tineo',
        age: 26
    })
}

haciendoUnaPeticionHTTP(soyUnCallback);