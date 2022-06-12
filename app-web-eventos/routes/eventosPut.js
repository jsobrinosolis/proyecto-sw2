var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('eventosPut', { title: 'Modificar Evento'});
});

router.post('/', function(req, res, next) {
    axios.put('http://localhost:3000/eventos/' + req.body.idEvento, {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        duracion: req.body.duracion,
        aforo: req.body.aforo,
        lugar: req.body.lugar,
        organizador: req.body.organizador
    })
        .then(response => {
            console.log("Evento modificado");
            res.render('index', { title: 'Eventos', mensaje: 'Evento modificado correctamente' });
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;