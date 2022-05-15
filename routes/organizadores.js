var express = require('express');
var router = express.Router();
const dbo = require('../db/connection');
const {ObjectID} = require("mongodb");

/* GET all organizadores. */
router.get('/', function(req, res, next) {
  const connection = dbo.getDb();
  connection.collection('organizadores').find({}).limit(5)
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar organizadores');
        } else {
          res.json(result);
        }
      });
});

/* Crear organizador */
router.post('/', async function(req, res, next) {
  const connection = dbo.getDb();
  const organizador = {
    nombre_empresa: req.body.nombre_empresa,
    pais_origen: req.body.pais_origen,
    owner: req.body.owner
  }
  connection
      .collection('organizadores')
      .insertOne(organizador, function (err, result){
        if (err){
          res.status(400).send('Error al crear el organizador');
        } else {
          res.status(201).send();
        }
      });
})


/* GET organizador by ID. */
router.get('/:id', async function(req, res, next) {
  const connection = dbo.getDb();
  connection
      .collection('organizadores')
      .findOne({_id:ObjectID(req.params.id)}, function(err, result){
        if (err){
          res.status(400).send('Error al acceder al organizador');
        } else {
          res.json(result);
        }
      });
});


/* PUT organizador by ID. */
router.put('/:id', async function(req, res, next) {
  const connection = dbo.getDb();
  connection
      .collection('organizadores')
      .updateOne({_id:ObjectID(req.params.id)}, {$set:{
          nombre_empresa: req.body.nombre_empresa,
          pais_origen: req.body.pais_origen,
          owner: req.body.owner
        }}, function(err, result){
        if (err){
          res.status(400).send('Error al actualizar la información de un organizador');
        } else {
          res.status(204).send();
        }
      });
});


/* PUT organizador by ID. */
router.delete('/:id', async function(req, res, next) {
  const connection = dbo.getDb();
  connection
      .collection('organizadores')
      .deleteOne({_id:ObjectID(req.params.id)}, function(err, result){
        if (err){
          res.status(400).send('Error al borrar un organizador');
        } else {
          res.status(200).send();
        }
      });
});

module.exports = router;
