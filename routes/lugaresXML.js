var express = require('express');
var router = express.Router();
const dbo = require('../db/connection');
const {ObjectID} = require("mongodb");
var xml = require('xml');

/* GET all lugares. */
router.get('/', function(req, res, next) {
    const connection = dbo.getDb();
    connection.collection('lugares').find({})
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar lugares');
        } else {
            res.set('Content-Type', 'text/xml');
            res.send(xml({lugares: result}));
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
                res.set('Content-Type', 'text/xml');
                res.send(xml({lugar: result}));
            }
        });
});


module.exports = router;
