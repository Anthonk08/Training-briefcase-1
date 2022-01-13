// Map method
/*
El uso forEach()no será útil si desea modificar permanentemente la matriz original. forEach()siempre regresa undefined.
Sin embargo, crear una nueva matriz a partir de una matriz existente es simple con el poderoso map()método.

Con el map() método , puede tomar una matriz, realizar alguna operación en cada elemento de la matriz y devolver
una nueva matriz.
*/

let carsMark = ["Honda", "Lexus", "Toyota", "Dodge", "Nizzan"];

let improvedCars = carsMark.map(car => {
    car += ` camioneta`;
    car = car.toUpperCase();
    return car;
});

console.log(improvedCars);

//Exercise 1.
/*Use el map() método para tomar la matriz de montos de las facturas que se muestra a continuación y cree
 una segunda matriz de números llamada totalsque muestre los montos de las facturas con una propina agregada del 15%. */

let bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totalSque = bills.map(bill => {
    let propina = bill;
    propina += bill * 0.15;
    return propina.toFixed(2);
});

console.log(totalSque);