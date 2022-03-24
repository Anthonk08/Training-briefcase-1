// sumar
function sumar(num1: number, num2: number): number {
    let suma = num1 + num2;
    console.log(`${num1} + ${num2} = ${suma}`);
    return suma
}

// Forma 2
let resta: (num1: number, num2: number) => number = function(num1: number, num2: number) {
    let res = num1 - num2;
    console.log(`${num1} - ${num2} = ${res}`);
    return res;
}

// Forma 3
let multiplicar: (num1: number, num2: number) => number
multiplicar = function(num1, num2) {
    let mult = num1 * num2;
    console.log(`${num1} * ${num2} = ${mult}`);
    return mult;
}
multiplicar(8, 8);

// Forma 3 Arrow function
let multiplicar2: (num1: number, num2: number) => number
multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar2(6, 6));

// Seudocodigo
// multiplicar( A, B, function(result)) {
//    console.log(A * B es result);
// };

let multiplicar3: (a: number, b: number, callback: (result: number) => void) => void
multiplicar3 = (a, b, callback) => callback(a * b);

multiplicar3( 4, 5, function(result) {
    console.log(`Resultado: ${result}`);
})