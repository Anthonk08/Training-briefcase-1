"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usuario = void 0;
exports.ValidarUsuario = ValidarUsuario;

var _joi = _interopRequireDefault(require("joi"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Usuario = _mongoose.default.model('Usuario', new _mongoose.default.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    tlds: {
      allow: ['com', 'net', 'es']
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  gender: {
    type: String,
    required: true,
    maxlength: 1,
    uppercase: true
  }
}));

exports.Usuario = Usuario;

function ValidarUsuario(usuario) {
  const datos = {
    name: _joi.default.string(),
    email: _joi.default.string().min(5).max(255).required().email().lowercase(),
    password: _joi.default.string().min(5).max(1024).required(),
    gender: _joi.default.string().max(1).required().valid('M', 'F').uppercase()
  };
  return usuario, datos;
}