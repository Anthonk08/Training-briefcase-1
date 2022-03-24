"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidarVenta = ValidarVenta;
exports.Venta = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Venta = _mongoose.default.model('Venta', new _mongoose.default.Schema({
  user_id: {
    type: String,
    required: true
  },
  productos_ids: {
    valueType: Array
  },
  total_to_pay: {
    type: String
  }
}));

exports.Venta = Venta;

function ValidarVenta(venta) {
  const datos = {
    price: _joi.default.number(),
    amount: _joi.default.number(),
    price: _joi.default.string().min(1)
  };
  return venta, datos;
}