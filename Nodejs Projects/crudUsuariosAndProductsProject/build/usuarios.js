"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _lodash = _interopRequireDefault(require("lodash"));

var _express = _interopRequireDefault(require("express"));

var _usuario = require("../models/usuario.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', async (req, res) => {
  const usuarios = await _usuario.Usuario.find().sort('name');
  res.send(usuarios);
});
router.post('/', async (req, res) => {
  const {
    error
  } = (0, _usuario.ValidarUsuario)(req.body);
  if (error) return res.status(400).send(error.error.details[0].message);
  const name = await _usuario.Usuario.findOne({
    name: req.body.name
  });
  if (name) return res.status(400).send('El nombre de usuario ha sido utilizado...'); //Send the information

  const usuario = new _usuario.Usuario(_lodash.default.pick(req.body, ['name', 'email', 'password', 'gender']));
  const salt = await _bcrypt.default.genSalt(10);
  usuario.password = await _bcrypt.default.hash(usuario.password, salt);
  await usuario.save();
  res.send(_lodash.default.pick(usuario, ['_id', 'name', 'email', 'gender']));
});
var _default = router;
exports.default = _default;