const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const { Usuario, validate } = require('../models/usuario');

const router = express.Router();

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find().sort('name');
  res.send(usuarios);
});

// eslint-disable-next-line consistent-return
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const email = await Usuario.findOne({ email: req.body.email });
  if (email) return res.status(400).send('Usuario ya registrado...');

  const usuario = new Usuario(_.pick(req.body, ['name', 'email', 'password', 'age', 'gender', 'national_id']));
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(usuario.password, salt);

  await usuario.save();
  res.send(_.pick(usuario, ['_id', 'name', 'email', 'age', 'gender', 'national_id']));
});

// eslint-disable-next-line consistent-return
router.put('/:id', async (req, res) => {
  // eslint-disable-next-line max-len
  const usuario = await Usuario.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      national_id: req.body.national_id,
    },
    { new: true }
  );
  if (!usuario) return res.status(404).send('El usuario con el ID no se encuentra.');
  res.send(usuario);
});

// eslint-disable-next-line consistent-return
router.delete('/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndRemove(req.params.id);
  if (!usuario) return res.status(404).send('El usuario con el ID no se encuentra.');
  res.send(usuario);
});

// eslint-disable-next-line consistent-return
router.get('/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).send('El usuario con el ID no se encuentra, intente de nuevo.');
  res.send(usuario);
});

module.exports = router;
