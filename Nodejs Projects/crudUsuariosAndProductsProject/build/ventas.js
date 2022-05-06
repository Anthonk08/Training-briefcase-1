'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require('lodash'));

var _express = _interopRequireDefault(require('express'));

var _venta = require('../models/venta.js');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express.default.Router();

router.get('/', async (req, res) => {
  const ventas = await _venta.Venta.find().sort('_id');
  res.send(ventas);
});
router.post('/', async (req, res) => {
  const { error } = (0, _venta.ValidarVenta)(req.body);
  if (error) return res.status(400).send(error.error.details[0].message);

  const _id = await _venta.Venta.findOne({
    id: req.body._id,
  });

  if (_id) return res.status(400).send('La venta ha sido realizada...'); //Send the information

  const venta = new _venta.Venta(_lodash.default.pick(req.body, ['nameUser', 'productsNames', 'total_to_pay']));
  await venta.save();
  res.send(_lodash.default.pick(venta, ['_id', 'nameUser', 'productsNames', 'total_to_pay']));
});
var _default = router;
exports.default = _default;
