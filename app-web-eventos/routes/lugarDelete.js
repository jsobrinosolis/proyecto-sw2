var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('lugarDelete', { title: 'Eliminar Lugar'});
});

router.post('/', function(req, res, next) {
    axios.delete('http://localhost:3000/lugares/' + req.body.id)
        .then(response => {
            console.log(response.data);
            res.render('index', { title: 'Lugares', mensaje: 'Lugar borrado correctamente' });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;