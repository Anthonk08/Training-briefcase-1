// Llamamos a express
const { urlencoded } = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');

// creamos aplicacion para ejecutando express
const app = express();

//Middleware
//Para obtener la informacion envia por el postman
app.use(urlencoded());
// Nos permite resivir informacion y arreglarla de forma que se pueda leer en los paramentros
app.use(express.json());
//
app.use(cookieParser());

//Registrar un GET request
app.get('/users/:userId', (req, res) => {
// Agregamos la ruta express de lo que queremos obtener, esta funcion recibe varios argumentos entre estos request y response: req y res
    res.json({
        id: req.params.userId,
        name: 'Anthony',
        apellidos: 'Tineo Cabreja',
        age: 26,
        createDay: todayDate,
    });
});

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

// Utilizamos el metodo listen para resivir peticiones web
const port = 5000;
app.listen(port, () => console.log(`El server ${port} inicio satisfactoriamente!!`));