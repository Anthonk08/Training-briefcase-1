const { Router } = require('express');

const router = Router();

// eslint-disable-next-line object-curly-newline
const { getProductos, createProducto, getProducto, updateProducto, deleteProducto } = require('../controllers/productos.controller');

router.get('/productos', getProductos);
router.get('/productos/:id', getProducto);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);

module.exports = router;