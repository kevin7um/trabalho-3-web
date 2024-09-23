var express = require('express');
var router = express.Router();
const controllerAdmin = require('../controller/web/controllerAdmin')

// GET 
router.get('/', controllerAdmin.painel)

router.get('/cadastro', controllerAdmin.cadastro_get)

router.get('/altera/:id', controllerAdmin.altera_get)

router.get('/deleta/:id', controllerAdmin.deleta)

//POST
router.post('/cadastro', controllerAdmin.cadastro_post)

router.post('/altera/:id', controllerAdmin.altera_post)



module.exports = router;