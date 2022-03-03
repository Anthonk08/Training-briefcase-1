const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const Usuario = mongoose.model(
  'Usuario',
  new mongoose.Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
      tlds: { allow: ['com', 'net', 'es'] },
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 2,
      uppercase: true,
    },
    national_id: {
      type: String,
      required: true,
      maxlength: 11,
    },
  }),
);

function ValidarUsuario(usuario) {
  const datos = {
    name: Joi.string(),
    // eslint-disable-next-line newline-per-chained-call
    email: Joi.string().min(5).max(255).required().email().lowercase(),
    password: Joi.string().min(5).max(1024).required(),
    age: Joi.string(),
    // eslint-disable-next-line newline-per-chained-call
    gender: Joi.string().min(1).max(2).required().valid('M', 'F').uppercase(),
    national_id: Joi.string().min(5).max(11).required(),
  };

  return usuario, datos;
}

exports.Usuario = Usuario;
exports.validate = ValidarUsuario;
