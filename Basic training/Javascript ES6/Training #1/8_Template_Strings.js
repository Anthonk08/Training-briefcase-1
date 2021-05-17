/*
Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas,
es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
*/

function getMessage() {
    return `Este año es ${new Date().getFullYear()}`;
}
console.log(getMessage());