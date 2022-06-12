var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('organizadorDelete', { title: 'Eliminar Organizador'});
});

router.post('/', function(req, res, next) {
    axios.delete('http://localhost:3000/organizadores/' + req.body.id)
        .then(response => {
            console.log(response.data);
            res.render('index', { title: 'Organizadores', mensaje: 'Organizador borrado correctamente' });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;