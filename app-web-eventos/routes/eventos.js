var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET all eventos. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3000/eventos')
        .then(response => {
            console.log(response.data);
            res.render('eventos', { title: 'Eventos', eventos: response.data });
            //res.json(response.data);
        }).catch(error => {
            console.log(error);
    });
});

/* Crear evento */
router.post('/', async function(req, res, next) {
    axios.post('http://localhost:3000/eventos', req.body)
        .then(response => {
            console.log(response.data);
            res.render('index', { title: 'Eventos', mensaje: 'Evento creado correctamente' });
            //res.json(response.data);
        }).catch(error => {
            console.log(error);
    });
});

module.exports = router;