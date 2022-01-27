const { Router } = require('express');

const router = Router();

// eslint-disable-next-line object-curly-newline
const { getUsuarios, createUsuario, getUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controller');

router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

module.exports = router;