var express = require('express');
var router = express.Router();
const controllerIndex = require('../controller/web/controllerIndex')

/* GET home page. */
router.get('/', controllerIndex.home);

/* GET */
router.get('/busca', controllerIndex.busca)

/* POST */
router.post('/busca', controllerIndex.busca_post)

module.exports = router;