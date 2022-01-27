// Requiro bcryptjs para encriptar contraseñas
const bcrypt = require('bcryptjs');
// Requiero el uuid para dar un id a cada objeto
const { v4 } = require('uuid');
// Pedir la base de datos
const { getConnection } = require('../database');

// Fecha actual
const today = new Date();
const dateNow = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

// Las funciones
const getUsuarios = (req, res) => {
  const usuarios = getConnection().get('usuarios').value();
  res.json(usuarios);
};

const getUsuario = (req, res) => {
  const usuario = getConnection().get('usuarios').find({ id: req.params.id }).value();
  res.json(usuario);
};

const createUsuario = (req, res) => {
  // El password sin encriptar
  const passwordPlano = req.body.password;
  // El niovel de proteccion de la contraseña
  const nivelProteccion = 10;
  // Usando bcrypt encriptamos la contraseña
  const passwordEncriptado = bcrypt.hashSync(passwordPlano, nivelProteccion);

  const newUsuario = {
    id: v4(),
    name: req.body.name,
    age: req.body.age,
    creation_date: dateNow,
    email: req.body.email,
    password: passwordEncriptado,
  };
  // Tomamos todo lo que hay dentro del array usuarios y agregamos el nuevo usuario
  getConnection().get('usuarios').push(newUsuario).write();
  // Enviamos al servidor el usuario agregado
  res.send(newUsuario);
};

const updateUsuario = async (req, res) => {
  const result = await getConnection().get('usuarios').find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(result);
};

const deleteUsuario = (req, res) => {
  const resultDelete = getConnection().get('usuarios').remove({ id: req.params.id }).write();
  res.json(resultDelete);
};

module.exports = {
  getUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario,
};