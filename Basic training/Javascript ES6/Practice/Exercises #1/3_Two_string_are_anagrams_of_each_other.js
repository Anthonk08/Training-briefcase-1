/*
Two Strings Are Anagrams of Each Other.
Create a function that takes in two strings as two parameters and returns a boolean that indicates whether
or not the first string is an anagram of the second string.
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