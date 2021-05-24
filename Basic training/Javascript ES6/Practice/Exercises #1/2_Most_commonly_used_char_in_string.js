/*
Most Commonly Used Character in String.
Write a function that takes a string, and returns the character that is most commonly used in the string.
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

console.log(caracterMasMencionado('hipopotamo')); //La letras que mas se repite es la O
console.log(caracterMasMencionado('Anthony')); //La letras que mas se repite es la n