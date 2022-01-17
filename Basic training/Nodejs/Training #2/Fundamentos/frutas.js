//Uso de Modulos: Export y Require
const frutas = ["Platano", "Manzana", "Platano", "Pera"];
//Varias constantes
const dineros = ["Euro", "Dolar", "Peso Dominicano"];

//Estamos exportando el array Frutas
//module.exports = frutas; //Si solo se exporta una sola cosa

//Si quieres exportar varias cosas
module.exports = {
    //Las dos formas de hacerlo
    frutas: frutas,
    dineros
}