/*
Most Commonly Used Character in String.
Write a function that takes a string, and returns the character that is most commonly used in the string.

split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena
en subcadenas.
*/

const caracterMasMencionado = palabra => {
    let cont = 0;
    let letraRepetida = '';
    palabra.split('').forEach(letra => {
        if(palabra.split(letra).length > cont) {
            cont = palabra.split(letra).length;
            letraRepetida = letra;
        }
    });
    return letraRepetida;
};


console.log(caracterMasMencionado('Pedro lava el auto y Maria revisa las facturas')); //ojo
console.log(caracterMasMencionado('hipopotamo')); //La letras que mas se repite es la O
