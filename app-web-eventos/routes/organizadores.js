var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET all organizadores. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3000/organizadores')
        .then(response => {
            res.render('organizadores', { title: 'Organizadores', organizadores: response.data });
        })
        .catch(error => {
            console.log(error);
        });
});

/* POST organizador */
router.post('/', function(req, res, next) {
    axios.post('http://localhost:3000/organizadores', req.body)
        .then(response => {
            res.render('index', { title: 'Organizadores', mensaje: 'Organizador creado correctamente' });
        })
        .catch(error => {
            console.log(error);
        });
});


module.exports = router;