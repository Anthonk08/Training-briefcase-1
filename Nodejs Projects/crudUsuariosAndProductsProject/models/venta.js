import Joi from 'joi';
import mongoose from 'mongoose';

const Venta = mongoose.model('Venta', new mongoose.Schema({
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
  }),
);

function ValidarVenta(venta) {
  const datos = {
    nameUser: Joi.string(),
    productsNames: Joi.string(),
    total_to_pay: Joi.string(),
  };

  return venta, datos;
}

export {Venta, ValidarVenta};