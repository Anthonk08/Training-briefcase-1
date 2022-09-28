// Funciones basicas

function hello(name) {
    return `Hola ${name}`
}

console.log(hello("Anthony"));

function plus(x, y) {
    return x + y;
}

console.log(plus(5, 2));

// Uso de ...params
function testParams(...params){
    let sum = 0;
    for (let x in params) {
        sum += params[x]
    }
    return sum;
}

console.log(testParams(5,2,3,9,11,24));