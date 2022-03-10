import bcrypt from 'bcrypt';
import _ from'lodash';
import express from 'express';
import { Usuario, ValidarUsuario } from '../models/usuario.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find().sort('name');
  res.send(usuarios);
});

router.post('/', async (req, res) => {
  const { error } = ValidarUsuario(req.body);
  if (error) return res.status(400).send(error.error.details[0].message);

  const name = await Usuario.findOne({ name: req.body.name });
  if (name) return res.status(400).send('El nombre de usuario ha sido utilizado...');

  //Send the information
  const usuario = new Usuario(_.pick(req.body, ['name', 'email', 'password', 'gender']));
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(usuario.password, salt);

  await usuario.save();
  res.send(_.pick(usuario, ['_id', 'name', 'email', 'gender']));
});

export default router;