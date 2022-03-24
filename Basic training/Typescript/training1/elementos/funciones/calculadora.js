// sumar
function sumar(num1, num2) {
    var suma = num1 + num2;
    console.log("".concat(num1, " + ").concat(num2, " = ").concat(suma));
    return suma;
}
// Forma 2
var resta = function (num1, num2) {
    var res = num1 - num2;
    console.log("".concat(num1, " - ").concat(num2, " = ").concat(res));
    return res;
};
// Forma 3
var multiplicar;
multiplicar = function (num1, num2) {
    var mult = num1 * num2;
    console.log("".concat(num1, " * ").concat(num2, " = ").concat(mult));
    return mult;
};
multiplicar(8, 8);
// Forma 3 Arrow function
var multiplicar2;
multiplicar = function (num1, num2) { return num1 * num2; };
console.log(multiplicar2(6, 6));
