var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('lugar', { title: 'Lugar by ID' });
});

router.post('/', function(req, res, next) {
    axios.get('http://localhost:3000/lugares/' + req.body.id)
        .then(response => {
            console.log(response.data);
            //res.render('lugares', { title: 'Lugares', locations: response.data });
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;