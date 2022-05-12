var express = require('express');
var router = express.Router();
const dbo = require('../db/connection');

const connection = dbo.getDb();

/* GET all lugares. */
router.get('/', function(req, res, next) {
  connection.collection('lugares').find({}).limit(5)
      .toArray(function (err, result){
        if (err){
          res.status(400).send('Error al buscar lugares');
        } else {
          res.json(result);
        }
      });
});

/*router.post('/', function(req, res, next) {
  array_lugares.push({
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion,
    ciudad: req.body.ciudad
  })
  //res.render('lugares', { title: 'Lugares', array_lugares})
  res.json(array_lugares)
});

router.get('/:id', function(req, res) {
  id = req.params.id;
  console.log(id)
  res.json(array_lugares[id])
});*/

array_lugares = [
  {
    nombre: "Santiago Bernabéu",
    ubicacion: "Paseo de la Castellana nº 138",
    ciudad: "Madrid"
  },
  {
    nombre: "Universidad CEU San Pablo",
    ubicacion: "Calle Julián Romea nº 23",
    ciudad: "Madrid"
  }
]

module.exports = router;
