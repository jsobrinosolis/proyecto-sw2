var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('organizadoresPut', { title: 'Modificar Organizador' });
});

router.post('/', function(req, res, next) {
    axios.put('http://localhost:3000/organizadores/' + req.body.idOrganizador, {
        nombre_empresa: req.body.nombre_empresa,
        pais_origen: req.body.pais_origen,
        owner: req.body.owner
    })
        .then(response => {
            console.log("Organizador modificado");
            res.render('index', { title: 'Organizadores', mensaje: 'Organizador modificado correctamente' });
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;