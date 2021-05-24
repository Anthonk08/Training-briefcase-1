/*
String Permutation is Palindrome.
Given a string, write a function that will return whether or not that string is a palindrome.

reverse() invierte el orden de los elementos de un array o string.
El primer elemento pasa a ser el último y el último pasa a ser el primero.
*/

const palindrome = palabra => {
    let alreves = palabra.split('').reverse().join('');
    if(palabra != alreves){
        return false;
    }else{
        return true;
    }
}

console.log(palindrome('ana')); //true
console.log(palindrome('avion'));//false


