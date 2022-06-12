var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET all organizadores. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3000/organizadores')
        .then(response => {
            console.log(response.data);
            res.render('organizadores', { title: 'Organizadores', organizadores: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

/* POST organizador */
router.post('/', function(req, res, next) {
    axios.post('http://localhost:3000/organizadores', req.body)
        .then(response => {
            console.log(response.data);
            res.render('organizadores', { title: 'Organizadores', organizadores: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

/* GET organizador by ID. */
router.get('/:id', function(req, res, next) {
    axios.get('http://localhost:3000/organizadores/' + req.params.id)
        .then(response => {
            console.log(response.data);
            res.render('organizadores', { title: 'Organizadores', organizadores: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

/* PUT organizador by ID. */
router.put('/:id', function(req, res, next) {
    axios.put('http://localhost:3000/organizadores/' + req.params.id, req.body)
        .then(response => {
            console.log(response.data);
            res.render('organizadores', { title: 'Organizadores', organizadores: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

/* DELETE organizador by ID. */
router.delete('/:id', function(req, res, next) {
    axios.delete('http://localhost:3000/organizadores/' + req.params.id)
        .then(response => {
            console.log(response.data);
            res.render('organizadores', { title: 'Organizadores', organizadores: response.data });
            //res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;