// Llamamos a express
const { urlencoded } = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const { status } = require('express/lib/response');

// creamos aplicacion para ejecutando express
const app = express();

//Middleware
//Para obtener la informacion enviada por el postman
app.use(urlencoded());
// Nos permite recibir informacion y arreglarla de forma que se pueda leer en los paramentros
app.use(express.json());
//
app.use(cookieParser());

/*
//Registrar un GET request
app.get('/users/:userId', (req, res) => {
// Agregamos la ruta express de lo que queremos obtener, esta funcion recibe varios argumentos entre estos request y response: req y res
    res.json({
        id: req.params.userId,
        name: 'Anthony',
        apellidos: 'Tineo Cabreja',
        age: 26,
        createDay: Date.now()
    });
});
*/

/*
//Registrar un POST request
app.post('/users/:userId', (req, res) => {
//  Cualquier parametro que este dentro de userId sera accesado por el req.params
    const { userId } = req.params || {};
    const { name, apellidos, age, test } = req.query || {};
    const { test_cookie } = req.cookies;
    //const { name, apellidos, age } = req.body || {}; // No funciono el jodio body

    // Headers
    const contentType = req.headers['content-type'];

    //cookie
    //const cookie

    // Enviar la ip
    const ip = app.ip;

// Agregamos la ruta express de lo que queremos obtener, esta funcion recibe varios argumentos entre estos request y response: req y res
    res.json({
        id: userId,
        name,
        apellidos,
        age,
        test,
        contentType,
        test_cookie,
    });
});
*/

/*
// Enviar un error 401 en caso de que algo salga mal
app.get('/users/error', (req, res) => {
    // Agregamos la ruta express de lo que queremos obtener, esta funcion recibe varios argumentos entre estos request y response: req y res
    res.status(401).json({
        error: 'Ocurrio un error!!',
    });
});
*/

/*
// Otros metodos utilizados para enviar datos
// Metodo 1
app.get('/users/error-code', (req, res) => {
    res.sendStatus(403);
});
// Metodo 2
// send es recomendable utilizarlo cuandos envias cualquier otro elelmentos que no sea json
app.get('/users/send', (req, res) => {
    res.status(201).send('<h1>Hola como estas</h1>');
});

// Metodo 3
app.get('/users/send-buffer', (req, res) => {
    res.send(new Buffer('Esto es un buffer'));
});
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/test', (req, res) => {
    sleep(3000);
    res.json({
        status: 'Ok',
    });
});


// Utilizamos el metodo listen para recibir peticiones web
const port = 5000;
app.listen(port, () => console.log(`El server ${port} inicio satisfactoriamente!!`));