/*
Longest String In Array
Write a function that accepts an array of strings. Return the longest string.
*/

fruits = ['Avocado', 'Banana', 'Coconut', 'Grapefruit', 'Tomato', 'Strawberry', 'Raspberry', 'Peach', 'AAAAAAAAAAAAAAAAAAAAAAAAAA'];

let word = '';
fruits.forEach(fruit => {
    if(fruit.length > word.length){
        word = fruit;
    }
});
console.log(word);
