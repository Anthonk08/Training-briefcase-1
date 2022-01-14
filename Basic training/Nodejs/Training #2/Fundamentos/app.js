//Aqui estamos requiriendo el array frutas que exportamos
/*
const {frutas, dinero} = require('./frutas');

const cowsay = require("cowsay");

frutas.forEach(fruta => console.log(fruta));

console.log(cowsay.say({
    text: "Hola, mi nombre es Anthony y estoy aprendienmdo Nodejs",
    e: "oO",
    T: "U "
}));

console.log(cowsay.think({
    text: "I thinking in my future and the love that I have about Nodejs"
}));
*/

/*
const http = require('http');
//Creamos el servidor
//Siempre vamos a resibir un request y una respuesta.;
const server = http.createServer((req, res) => {
    res.end('Estoy respondiendo a tu solicitud!\nHola como estas?')
});

const puerto = 3000;
server.listen(puerto, () => {
    console.log("Escuchando solicitudes!");
});

//Para poder ver el request, vamos a un navegador y ponemos: localhost:3000
//ctrl + c, para terminar con el servidor
*/

const express = require('express');
const app = express();

const port = 3000;
const name = "Anthony Tineo";
// El  '/' significa desde la paginba raiz
//Pagina raiz, estoy hyablando del localhost:3000

//Middleware
app.use(express.static(__dirname + "/public"));

//Rutas
app.get('/', (req, res) => {
    res.send('Mi respuesta desde express!!');
});

//Pagina servicios
app.get('/servicios', (req, res) => {
    res.send(`Hola te hablo desde la pagina "SERVICIOS", hecho por ${name}`);
});

app.listen(port, () => {
    console.log("Servidor a su servicio en el puerto:", port);
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});