var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET all lugares. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3000/lugares')
        .then(response => {
            console.log(response.data);
            res.render('lugares', { title: 'Lugares', locations: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

/* POST lugar. */
router.post('/', function(req, res, next) {
    axios.post('http://localhost:3000/lugares', {
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        ciudad: req.body.ciudad
    })
        .then(response => {
            console.log("Lugar creado");
            res.render('index', { title: 'Lugares', mensaje: 'Lugar creado correctamente' });
        })
        .catch(error => {
            console.log(error);
        });
});


module.exports = router;
