var express = require('express');
var router = express.Router();
const dbo = require('../db/connection');
const {ObjectID, ObjectId} = require("mongodb");

/* GET all eventos. */
router.get('/', function(req, res, next) {
    const connection = dbo.getDb();
    connection.collection('eventos').find({}).limit(5)
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar eventos');
        } else {
          res.json(result);
        }
      });
});

/* Crear evento */
router.post('/', async function(req, res, next) {
    const connection = dbo.getDb();
    const evento = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        duracion: req.body.duracion,
        aforo: req.body.aforo,
        lugar: req.body.lugar,
        organizador: req.body.organizador
    }
    connection
        .collection('eventos')
        .insertOne(evento, function (err, result){
            if (err){
                res.status(400).send('Error al crear el evento');
            } else {
                res.status(201).send();
            }
        });
})

/* GET evento by ID. */
router.get('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    const pipeline = [
        {
            $match: {
                _id: ObjectId(req.params.id),
            }
        }, {
            '$lookup': {
                'from': 'lugares',
                'let': {
                    'nombre': '$lugar'
                },
                'pipeline': [
                    {
                        '$match': {
                            '$expr': {
                                '$eq': [
                                    '$nombre', '$$nombre'
                                ]
                            }
                        }
                    }
                ],
                'as': 'lugar'
            }
        }, {
            '$lookup': {
                'from': 'organizadores',
                'let': {
                    'nombre': '$organizador'
                },
                'pipeline': [
                    {
                        '$match': {
                            '$expr': {
                                '$eq': [
                                    '$nombre_empresa', '$$nombre'
                                ]
                            }
                        }
                    }
                ],
                'as': 'organizador'
            }
        }

    ]
    const query = await connection.collection('eventos').aggregate(pipeline).next();
    res.json(query);

});


/* PUT evento by ID. */
router.put('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    connection
        .collection('eventos')
        .updateOne({_id:ObjectID(req.params.id)}, {$set:{
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                duracion: req.body.duracion,
                aforo: req.body.aforo,
                lugar: req.body.lugar,
                organizador: req.body.organizador
            }}, function(err, result){
            if (err){
                res.status(400).send('Error al actualizar la información de un evento');
            } else {
                res.status(204).send();
            }
        });
});


/* DELETE evento by ID. */
router.delete('/:id', async function(req, res, next) {
    const connection = dbo.getDb();
    connection
        .collection('eventos')
        .deleteOne({_id:ObjectID(req.params.id)}, function(err, result){
            if (err){
                res.status(400).send('Error al borrar un evento');
            } else {
                res.status(200).send();
            }
        });
});

module.exports = router;
