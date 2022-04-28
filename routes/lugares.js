var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('lugares', { title: 'Lugares', array_lugares })
  res.json(array_lugares)
});

router.post('/', function(req, res, next) {
  array_lugares.push({
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion,
    ciudad: req.body.ciudad
  })
  //res.render('lugares', { title: 'Lugares', array_lugares})
  res.json(array_lugares)
});

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
