import Joi from 'joi';
import mongoose from 'mongoose';

const Producto = mongoose.model('Producto', new mongoose.Schema({
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
  }),
);

function ValidarProducto(producto) {
  const datos = {
    price: Joi.number(),
    amount: Joi.number(),
    price: Joi.string().min(1),
  };

  return producto, datos;
}

export {Producto, ValidarProducto};