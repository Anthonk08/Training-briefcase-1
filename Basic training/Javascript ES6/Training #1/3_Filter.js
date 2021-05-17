//Learning how to use filter.
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const products = [
    {name: 'Banana', type: 'Fruit'},
    {name: 'Lemon', type: 'Fruit'},
    {name: 'Aguacate', type: 'Fruit'},
    {name: 'Sandia', type: 'Fruit'},
    {name: 'Yuca', type: 'Vegetable'},
    {name: 'Brocoli', type: 'Vegetable'},
    {name: 'Zanahoria', type: 'Vegetable'},
    {name: 'Papa', type: 'Vegetable'}
];

const filterProducts = products.filter(product => product.type === 'Vegetable');
console.log(filterProducts);


const products2 = [
    {name: 'Banana', type: 'Fruit', quantiity: 25, price: 250},
    {name: 'Lemon', type: 'Fruit', quantiity: 11, price: 140},
    {name: 'Zanahoria', type: 'Vegetable', quantiity: 50, price: 650},
    {name: 'Papa', type: 'Vegetable', quantiity: 8, price: 400}
];

const filterProducts2 = products2.filter(product => product.type === 'Fruit');
console.log(filterProducts2);

