var express = require('express');
var router = express.Router();
const controllerPontos = require('../controller/api/controllerPontos');

//GET
router.get('/', controllerPontos.lista)

router.get('/consulta/:id', controllerPontos.consulta);

//POST
router.post('/busca', controllerPontos.busca);

router.post('/cadastro', controllerPontos.cadastro);

//UPDATE
router.put('/altera/:id', controllerPontos.atualiza);

//DELETE
router.delete('/deleta/:id', controllerPontos.deleta);

module.exports = router;