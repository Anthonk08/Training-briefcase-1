const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const usuarios = require('./routes/usuarios');

const app = express();

mongoose
  .connect('mongodb://localhost/crudUsuario')
  .then(() => console.log('Conectado a MongoDB...'))
  // eslint-disable-next-line arrow-parens
  .catch(err => console.error('No se pudo conectar a MongoDB...', err));

app.use(express.json());
app.use('/api/usuarios', usuarios);

const port = 3000;
app.listen(port, () => console.log(`El puerto ${port}, inicio correctamente!...`));
