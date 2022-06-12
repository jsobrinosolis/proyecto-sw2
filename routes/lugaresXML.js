var express = require('express');
var router = express.Router();
const dbo = require('../db/connection');
const {ObjectID} = require("mongodb");
var xml = require('xml');
var js2xmlparser = require("js2xmlparser");

/* GET all lugares. */
router.get('/', function(req, res, next) {
    const connection = dbo.getDb();
    connection.collection('lugares').find({})
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar lugares');
        } else {
            var js2xml = js2xmlparser.parse("lugares", result);
            res.send(js2xml.toString());
        }
      });
});

/* GET lugar by ID. */
router.get('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    connection
        .collection('lugares')
        .findOne({_id:ObjectID(req.params.id)}, function(err, result){
            if (err){
                res.status(400).send('Error al acceder al lugar');
            } else {
                var js2xml = js2xmlparser.parse("lugar", result);
                res.send(js2xml.toString());
            }
        });
});


module.exports = router;
