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
const bodyParser = require('body-parser');

//Los Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Exportamos los datos del archivo .env
require('dotenv').config()

const port = process.env.PORT || 3000;
const name = "Anthony Tineo";
// El  '/' significa desde la paginba raiz
//Pagina raiz, estoy hyablando del localhost:3000

//Conexion a la base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.2xdgh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log('Base de datos conectada, felicidades!!'))
    .catch(e => console.log(e))

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Middleware
app.use(express.static(__dirname + "/public"));

//Rutas
/*
//Pagina principal
app.get('/', (req, res) => {
    //res.send('Mi respuesta desde express!!');
    res.render("index", {titulo: "Pagina dinamica"});
});

//Pagina servicios
app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicio: "Este es un mensaje de la pagina dinamica: SERVICIOS"});
});
*/

//Llamando la rutra creada en RutasWeb.js
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.listen(port, () => {
    console.log("Servidor a su servicio en el puerto:", port);
});

app.use((req, res, next) => {
    res.status(404).render("404", {titulo: 404, descripcion: "Titulo del sitio web"});
});