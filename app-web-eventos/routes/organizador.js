var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('organizador', { title: 'Organizador by ID', organizador: {} });
});

router.post('/', function(req, res, next) {
    axios.get('http://localhost:3000/organizadores/' + req.body.id)
        .then(response => {
            console.log(response.data);
            res.render('organizador', { title: 'Organizador by ID', organizador: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;