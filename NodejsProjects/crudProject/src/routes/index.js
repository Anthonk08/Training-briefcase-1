const { Router } = require('express');

const router = Router();
const fs = require('fs');
const uuid = require('uuid/v4'); // Para crear id aletorios

const bcrypt = require('bcrypt');

const dateNow = new Date();

const jsonUsuarios = fs.readFileSync('/src/usuarios.json', 'utf-8');
// Fix for saving user data before sending to archive
// eslint-disable-next-line prefer-const
let usuarios = JSON.parse(jsonUsuarios);

// REST API CRUD
router.get('/api', (req, res) => {
  res.send('usuarios.json');
});

router.post('/', (req, res) => {
  const {
    name,
    email,
    password,
    age,
    creationDate,
  } = req.body;

  if (!name || !email || !password || !age || !creationDate) {
    res.status(404).send('Entries must have all camps completed')
    console.log('Entries must have all camps completed')
    return;
  }

  // Encriptando la contraseña
  const palabraEncriptada = bcrypt.hash(password, 10, (err, wordPassword) => {
    if (err) {
      console.log('Error encriptando: ', err);
      return err;
    } else {
    console.log(`La contraseña encriptada es: ${wordPassword}`);
    return wordPassword;
    };

  // eslint-disable-next-line prefer-const
  let newUsuario = {
    id: uuid(),
    name,
    email,
    password: palabraEncriptada,
    age,
    creationDate: dateNow,
  };

  usuarios.push(newUsuario);
  const jsonUsuarios1 = JSON.stringify(usuarios);
  fs.writeFileSync('src/usuarios.js', jsonUsuarios1, 'utf-8');
});

router.get('/delete:id', (req) => {
  usuarios = usuarios.filter((usuario) => usuario !== req.params.id);
  const jsonUsuarios3 = JSON.stringify(usuarios);
  fs.writeFileSync('src/usuarios.json', jsonUsuarios3, 'utf-8');
});

module.exports = router;
