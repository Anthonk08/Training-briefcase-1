const {frutas, dinero} = require('./frutas');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I am Anthony",
    e : "o0",
    T : "U "
}));

frutas.forEach(fruta =>{
    console.count(fruta);
});

console.log(dinero);

