var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('lugaresPut', { title: 'Modificar Lugar'});
});

router.post('/', function(req, res, next) {
    axios.put('http://localhost:3000/lugares/' + req.body.idLugar, {
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        ciudad: req.body.ciudad
    })
        .then(response => {
            console.log("Lugar modificado");
            res.render('index', { title: 'Lugares', mensaje: 'Lugar modificado correctamente' });
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;