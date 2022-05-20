const axios = require("axios");
var express = require('express');
var router = express.Router();

router.get('/:location', function(req, res, next) {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
        params: {q: req.params.location},
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': '4c76dd4318msh16b6c24ad054e42p1ff7f9jsn78c10b080470'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

module.exports = router;
