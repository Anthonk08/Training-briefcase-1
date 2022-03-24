import _ from'lodash';
import express from 'express';
import { Venta, ValidarVenta } from '../models/venta.js';
const router = express.Router();


router.get('/', async (req, res) => {
    const ventas = await Venta.find().sort('_id');
    res.send(ventas);
});

router.post('/', async (req, res) => {
    const { error } = ValidarVenta(req.body);
    if (error) return res.status(400).send(error.error.details[0].message);

    const _id = await Venta.findOne({ id: req.body._id });
    if (_id) return res.status(400).send('La venta ha sido realizada...');

    //Send the information
    const venta = new Venta(_.pick(req.body, ['nameUser', 'productsNames', 'total_to_pay']));
    await venta.save();
    res.send(_.pick(venta, ['_id', 'nameUser', 'productsNames', 'total_to_pay']));
});

export default router;