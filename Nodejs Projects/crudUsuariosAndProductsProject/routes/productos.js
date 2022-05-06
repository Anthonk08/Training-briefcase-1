import _ from 'lodash';
import express from 'express';
import { Producto, ValidarProducto } from '../models/producto.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await Producto.find().sort('_id');
  res.send(productos);
});

router.post('/', async (req, res) => {
  const { error } = ValidarProducto(req.body);
  if (error) return res.status(400).send(error.error.details[0].message);

  const description = await Producto.findOne({ description: req.body.description });
  if (description) return res.status(400).send('El producto ha sido agregado...');

  //Send the information
  const producto = new Producto(_.pick(req.body, ['price', 'amount', 'description']));

  await producto.save();
  res.send(_.pick(producto, ['_id', 'price', 'amount', 'description']));
});

router.patch('/:id', async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(
    req.params.id,
    {
      price: req.body.price,
      amount: req.body.amount,
      description: req.body.description,
    },
    { new: true }
  );
  if (!producto) return res.status(404).send('El producto con el ID no se encuentra.');
  res.send(producto);
});

export default router;
