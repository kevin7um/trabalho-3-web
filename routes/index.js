var express = require('express');
var router = express.Router();
const controllerIndex = require('../controller/web/controllerIndex')

/* GET home page. */
router.get('/', controllerIndex.home);

/* POST */
router.post('/busca', controllerIndex.busca)

module.exports = router;