var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET all lugares. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3000/lugaresXML')
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
