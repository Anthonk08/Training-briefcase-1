/*
Two Strings Are Anagrams of Each Other.
Create a function that takes in two strings as two parameters and returns a boolean that indicates whether
or not the first string is an anagram of the second string.

split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena
en subcadenas.

sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

join() une todos los elementos de una matriz en una cadena y
devuelve esta cadena.
*/

const anagrama = (string1, string2) => {
    if(string1.length != string2.length){
        return false;
    }else {
        let array1 = string1.split('').sort().join();
        let array2 = string2.split('').sort().join();
        return array1 === array2;
    }
}
console.log(anagrama('amor', 'roma'));
console.log(anagrama('aaa', 'aaaaaa'));
console.log(anagrama('poder', 'norma'));