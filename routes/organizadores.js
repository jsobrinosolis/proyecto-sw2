var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(array_organizadores)
});

router.post('/', function(req, res, next) {
  array_organizadores.push({
    nombre_empresa: req.body.nombre_empresa,
    pais_origen: req.body.pais_origen,
    owner: req.body.owner
  })
  res.json(array_organizadores)
});
array_organizadores = [
  { nombre_empresa: "De la Riva",
    pais_origen: "España",
    owner: "José Morán Arteaga"
  },
  { nombre_empresa: "Ejemplo",
    pais_origen: "EEUU",
    owners: [
      {
        nombre: "Elon Musk"
      },
      {
        nombre: "Jeff Bezos"
      }
    ]
  }
]

module.exports = router;
