
// Objects
/*
const user = {
    // Key: value
    name: "Anthony",
    lastName: "Perez",
    age: 26,
    adress: {
        country: "Dominican Republic",
        city: "Santiago de los caballeros",
        street: "Vanessa ramirez faña",
    },
    friends: ["Brandon", "Laenor", "Daemon", "Ned"],
    active: true,
    sendMail: function() {
        return "Sending Email!!"
    },
}
*/

//console.log(user);
//console.log(user.friends);
//console.log(user.adress);
//console.log(`I am from ${user.adress.country}`);
//console.log(user.sendMail());

// Short and property
/*
const name = "Laptop";
const price = 2500;

const newProduct = {
    name,
    price,
}
*/

//console.log(newProduct);

// Manipulacion del DOM, MUY IMPORTANTE
/*
const title = document.createElement('h1');
title.innerText = 'Hola Anthony, buen uso del DOM!!';

const button1 = document.createElement('button');
button1.innerText = 'click'

// Event handler o manejadores de eventos
button1.addEventListener('click', () => {
    console.log("Hola Anthony, el event handler funciona jaja");
    title.innerText = 'H1 acutailizado con JS';
    alert("Se realizo un click");
});

document.body.append(title);
document.body.append(button1);
*/

// Another use of DOM
/*
const user2 = {
    name: "Anthony",
    age: 26,
};

function printInfo(user) {
    return '<h1>Hola '+ user.name + '</h1>';
};
console.log(printInfo(user2));

document.body.innerHTML = printInfo(user);
*/

// Using destructuring
const user3 = {
    name: "Anthony",
    age: 26,
};

function printInfo(user) {
    const {name, age} = user;
    console.log(name, age);
    return '<h1>Hola '+ name + '</h1>';
};
console.log(printInfo(user3));

document.body.innerHTML = printInfo(user3);