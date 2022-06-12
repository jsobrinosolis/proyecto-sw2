var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('eventoDelete', { title: 'Eliminar Evento'});
});

router.post('/', function(req, res, next) {
    axios.delete('http://localhost:3000/eventos/' + req.body.id)
        .then(response => {
            console.log(response.data);
            res.render('index', { title: 'Eventos', mensaje: 'Evento borrado correctamente' });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;