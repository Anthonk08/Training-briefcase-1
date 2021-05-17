/*
Parámetros predeterminados de función permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa
ningún valor o undefined.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5
*/

//Forma normal
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }
    return method;
    //Logic to make the request
}
//Es lo mismo.
console.log(makeAjaxRequest('www.google.com'));
console.log(makeAjaxRequest('www.google.com', 'POST'));

//Forma nueva
function makeAjaxRequest2(url, method = 'GET') {
    // Default Function Argument
    return method;
}
console.log(makeAjaxRequest2('www.google.com'));
