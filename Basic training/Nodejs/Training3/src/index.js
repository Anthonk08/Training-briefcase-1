// Llamamos a express
const express = require('express');

// Llamamos una aplicacion ejecutando express
const app = express();

// Para agregar fecha de hoy, tonteria mia
const today = new Date();
const todayDate = `${today.getFullYear()} - ${today.getMonth() + 1} - ${today.getDate()}`; // format sql YYYY - MM - DD

//Registrar un get request
app.get('/users/:userId', (req, res) => {
// Agregamos la ruta express de lo que queremos obtener, esta funcion resive varios argumentos entre estos request y response: req y res
    res.json({
        id: req.params.userId,
        name: 'Anthony',
        apellidos: 'Tineo Cabreja',
        age: 26,
        createDay: todayDate,
    });
});

// Utilizamos el metodo listen para resivir peticiones web
const port = 5000;
app.listen(port, () => console.log(`El server ${port} inicio satisfactoriamente!!`));