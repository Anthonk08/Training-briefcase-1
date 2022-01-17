const express = require('express');
const router = express.Router();

//Rutas
//Pagina principal
router.get('/', (req, res) => {
    //res.send('Mi respuesta desde express!!');
    res.render("index", {titulo: "Pagina dinamica"});
});

//Pagina servicios
router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicio: "Este es un mensaje de la pagina dinamica: SERVICIOS"});
});

module.exports = router;