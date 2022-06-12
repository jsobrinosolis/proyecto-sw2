var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('lugarXML', { title: 'LugarXML by ID' });
});

router.post('/', function(req, res, next) {
    axios.get('http://localhost:3000/lugaresXML/' + req.body.id)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;