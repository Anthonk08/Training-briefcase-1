// Anonymous functions
/*
console.log(function start() {
    return 'Starting...';
}());

const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', function() {
    alert('Clicked!!');
});

document.body.append(button);
*/

// Arrows  functions
//Normal functions
/*
function add(x,y) {
    return x + y;
}

// Arrow functions
const add2 = (x,y) => {
    return x + y;
}
*/

// Use of RETURN
/*
const showtest = () => 'Hola Anthony';
const showNumber = () => 26;
const showBoolean = () => true;
const showArray = () => [1, 2, 3, 4, 5];
// In case of Object
const showObject = () => ({name: 'Anthony', age: 10, favoriteColor: 'blue',});
console.log(showtest(), showNumber(), showBoolean(), showArray(), showObject());
*/

const button = document.createElement('button');
button.innerText = 'Click me';
button.style = 'background: red, color: white';

const isAuthorized = true;

button.addEventListener('click', () => {
    if(isAuthorized) {
       return alert('Esta autorizado!!');
    }
    alert('No esta autorizado');
});

document.body.append(button);