var express = require('express');
var router = express.Router();
const dbo = require('../db/connection');
const {ObjectID} = require("mongodb");

/* GET all lugares. */
router.get('/', function(req, res, next) {
    const connection = dbo.getDb();
    connection.collection('lugares').find({})
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar lugares');
        } else {
          res.json(result);
        }
      });
});

/* Crear lugar */
router.post('/', async function(req, res, next) {
    const connection = dbo.getDb();
    const lugar = {
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        ciudad: req.body.ciudad
    }
    connection
        .collection('lugares')
        .insertOne(lugar, function (err, result){
            if (err){
                res.status(400).send('Error al crear el lugar');
            } else {
                res.status(201).send();
            }
        });
})


/* GET lugar by ID. */
router.get('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    connection
        .collection('lugares')
        .findOne({_id:ObjectID(req.params.id)}, function(err, result){
            if (err){
                res.status(400).send('Error al acceder al lugar');
            } else {
                res.json(result);
            }
        });
});


/* PUT lugar by ID. */
router.put('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    connection
        .collection('lugares')
        .updateOne({_id:ObjectID(req.params.id)}, {$set:{
                nombre: req.body.nombre,
                ubicacion: req.body.ubicacion,
                ciudad: req.body.ciudad
            }}, function(err, result){
            if (err){
                res.status(400).send('Error al actualizar la información de un lugar');
            } else {
                res.status(204).send();
            }
        });
});


/* DELETE lugar by ID. */
router.delete('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    connection
        .collection('lugares')
        .deleteOne({_id:ObjectID(req.params.id)}, function(err, result){
            if (err){
                res.status(400).send('Error al borrar un lugar');
            } else {
                res.status(200).send();
            }
        });
});

module.exports = router;
