const { Router } = require('express');

const router = Router();
const fs = require('fs');
// eslint-disable-next-line import/no-unresolved
const uuid = require('uuid/v4');

const dateNow = new Date();

const jsonUsuarios = fs.readFileSync('/src/usuarios.json', 'utf-8');
// Fix for saving user data before sending to archive
// eslint-disable-next-line prefer-const
let usuarios = JSON.parse(jsonUsuarios);

router.get('/', (req, res) => {
  res.send('usuarios.json');
});

router.post('/', (req, res) => {
  let {
    // eslint-disable-next-line prefer-const
    name,
    // eslint-disable-next-line prefer-const
    email,
    // eslint-disable-next-line prefer-const
    password,
    // eslint-disable-next-line prefer-const
    age,
    // eslint-disable-next-line prefer-const
    creationDate,
  } = req.body;

  if (!name || !email || !password || !age || !creationDate) {
    res.status(404).send('Entries must have all camps completed')
    console.log('Entries must have all camps completed')
    return;
  }

  // eslint-disable-next-line prefer-const
  let newUsuario = {
    id: uuid(),
    name,
    email,
    password,
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
