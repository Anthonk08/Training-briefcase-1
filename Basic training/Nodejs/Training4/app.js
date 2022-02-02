const fs = require('fs');

/*
const files = fs.readdirSync('./');
console.log(files);
*/

fs.readdir('$', function(err, files) {
    if (err) console.log(`ERROR ${err}`);
    else console.log(files);
});

// callback 1
function callback(){
    console.log(`Hola soy un callback`);
}

function mensaje(fn) {
    return fn();
}

mensaje(callback);

// callback 2
function mensaje1(fn) {
    setTimeout(() => {
        console.log(`mensaje 1`);
        fn();
    }, 3000);
}

function mensaje2() {
    console.log(`Mensaje 2`);
}

mensaje1(mensaje2);