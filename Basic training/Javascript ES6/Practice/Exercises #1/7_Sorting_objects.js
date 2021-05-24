/*
Sorting Objects.
Given an array of objects, sort the objects by population size. Return the entire object.

sort()  ordena un array según la función comparativa que se aplique,
y si no se pasa una función comparativa, se ordena segun su posición del valor
del string de acuerdo a su valor Unicode.
}
*/

const sortingObjects = numbers => {
    numbers.sort((numA, numB) => {
        return numA - numB;
    });
    return numbers;
}

console.log(sortingObjects([1, 11, 27, 2, 34, 123]));
console.log(sortingObjects([-1, -11, -27, -2, -34, -123]));