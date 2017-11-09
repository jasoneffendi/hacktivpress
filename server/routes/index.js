var express = require('express');
var articleCtrl = require('../controllers/article')
var router = express.Router();

/* GET home page. */
router.get('/', articleCtrl.get);

router.get('/:id/details', articleCtrl.getOne)

router.post('/', articleCtrl.post)

module.exports = router;
