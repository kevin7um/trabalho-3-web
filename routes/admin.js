var express = require('express');
var router = express.Router();
const controllerAdmin = require('../controller/web/controllerAdmin')

// GET 
router.get('/cadastro', controllerAdmin.cadastro_get)

//POST
router.post('/cadastro', controllerAdmin.cadastro_post)

module.exports = router;