var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    res.render('tiempo', { title: 'Weather' });
});

/* GET weather by location. */
router.post('/', function(req, res, next) {
    axios.get('http://localhost:3000/tiempo/' + req.body.location)
        .then(response => {
            //res.render('tiempo', { title: 'Tiempo', tiempo: response.data });
            res.json(response.data);
        }).catch(error => {
            console.log(error);
    });
});


module.exports = router;