import Joi from 'joi';
import mongoose from 'mongoose';

const Venta = mongoose.model('Venta', new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
    },
    productos_ids: {
      valueType: Array,
    },
    total_to_pay: {
      type: String,
    },
  }),
);

function ValidarVenta(venta) {
  const datos = {
    price: Joi.number(),
    amount: Joi.number(),
    price: Joi.string().min(1),
  };

  return venta, datos;
}

export {Venta, ValidarVenta};