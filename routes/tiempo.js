const axios = require("axios");
var express = require('express');
var router = express.Router();

router.get('/:location', function(req, res, next) {

    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {location: req.params.location, format: 'json', u: 'f'},
        headers: {
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
            'X-RapidAPI-Key': ''
        }
    };

    axios.request(options).then(function (response) {
        res.json(response);
    }).catch(function (error) {
        res.status(400).send('Error al buscar el tiempo');
    });
});
