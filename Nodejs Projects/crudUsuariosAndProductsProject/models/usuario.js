import Joi from 'joi';
import mongoose from 'mongoose';

const Usuario = mongoose.model('Usuario', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
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
    gender: {
      type: String,
      required: true,
      maxlength: 1,
      uppercase: true,
    },
  }),
);

function ValidarUsuario(usuario) {
  const datos = {
    name: Joi.string(),
    email: Joi.string().min(5).max(255).required().email().lowercase(),
    password: Joi.string().min(5).max(1024).required(),
    gender: Joi.string().max(1).required().valid('M', 'F').uppercase(),
  };

  return usuario, datos;
}

export {Usuario, ValidarUsuario};