'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Producto = void 0;
exports.ValidarProducto = ValidarProducto;

var _joi = _interopRequireDefault(require('joi'));

var _mongoose = _interopRequireDefault(require('mongoose'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Producto = _mongoose.default.model(
  'Producto',
  new _mongoose.default.Schema({
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
    },
  })
);

exports.Producto = Producto;

function ValidarProducto(producto) {
  const datos = {
    price: _joi.default.number(),
    amount: _joi.default.number(),
    price: _joi.default.string().min(1),
  };
  return producto, datos;
}
