const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {

    try{

        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
        arrayMascotas: arrayMascotasDB
    })

    } catch (error) {
        console.log(error);
    }
});

router.get('/crear', (req, res) => {
    res.render('crear');
});

router.post('/', async(req, res) => {
    const body = req.body
    try {
        //Primera forma de hacer el POST
        //const mascotaDB = new Mascota(body)
        //await mascotaDB.save()

        //Segunda forma de hacer el POST
        await Mascota.create(body);

        res.redirect('/mascotas');

    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async(req, res) => {

    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findOne({_id: id})
        console.log(mascotaDB);

        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        });

    } catch (error) {
        console.log(error);

        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        });
    }
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id})

        if(mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'Eliminado!!'
            });
        }else {
            res.json({
                estado: false,
                mensaje: 'Fallo al eliminar!'
            });
        }

    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })

        res.json({
            estado: true,
            mensaje: 'Los datos de la mascota fueron actualizados!'
        });
    } catch (error) {
        console.log(error);

        res.json({
            estado: false,
            mensaje: 'La actualizacion fallo!'
        });
    }
});



module.exports = router;

