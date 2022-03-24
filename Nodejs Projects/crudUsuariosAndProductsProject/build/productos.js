"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _express = _interopRequireDefault(require("express"));

var _producto = require("../models/producto.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', async (req, res) => {
  const productos = await _producto.Producto.find().sort('_id');
  res.send(productos);
});
router.post('/', async (req, res) => {
  const {
    error
  } = (0, _producto.ValidarProducto)(req.body);
  if (error) return res.status(400).send(error.error.details[0].message);
  const description = await _producto.Producto.findOne({
    description: req.body.description
  });
  if (description) return res.status(400).send('El producto ha sido agregado...'); //Send the information

  const producto = new _producto.Producto(_lodash.default.pick(req.body, ['price', 'amount', 'description']));
  await producto.save();
  res.send(_lodash.default.pick(producto, ['_id', 'price', 'amount', 'description']));
});
router.patch('/:id', async (req, res) => {
  const producto = await _producto.Producto.findByIdAndUpdate(req.params.id, {
    price: req.body.price,
    amount: req.body.amount,
    description: req.body.description
  }, {
    new: true
  });
  if (!producto) return res.status(404).send('El producto con el ID no se encuentra.');
  res.send(producto);
});
var _default = router;
exports.default = _default;