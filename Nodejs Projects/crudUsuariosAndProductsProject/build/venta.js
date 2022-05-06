'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ValidarVenta = ValidarVenta;
exports.Venta = void 0;

var _joi = _interopRequireDefault(require('joi'));

var _mongoose = _interopRequireDefault(require('mongoose'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Venta = _mongoose.default.model(
  'Venta',
  new _mongoose.default.Schema({
    nameUser: {
      type: String,
      required: true,
    },
    productsNames: {
      type: String,
    },
    total_to_pay: {
      type: String,
    },
  })
);

exports.Venta = Venta;

function ValidarVenta(venta) {
  const datos = {
    nameUser: _joi.default.string(),
    productsNames: _joi.default.string(),
    total_to_pay: _joi.default.string(),
  };
  return venta, datos;
}
