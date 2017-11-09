var express = require('express');
var cors = require('cors')
var articleCtrl = require('../controllers/article')
var router = express.Router();

router.use(cors())

/* GET home page. */
router.get('/', articleCtrl.get);

router.get('/:id/details', articleCtrl.getOne)

router.get('/:id/author', articleCtrl.getByAuthor)

router.get('/:category/category', articleCtrl.getByCategory)

router.put('/:id', articleCtrl.put)

router.delete('/:id', articleCtrl.del)

router.post('/', articleCtrl.post)

module.exports = router;
