var express = require('express');
var articleCtrl = require('../controllers/article')
var router = express.Router();

/* GET home page. */
router.get('/', articleCtrl.get);

router.get('/:id/details', articleCtrl.getOne)

router.get('/:id/author', articleCtrl.getByAuthor)

router.get('/:category/category', articleCtrl.getByCategory)

router.put('/:id', articleCtrl.put)

router.delete('/:id', articleCtrl.del)

router.post('/', articleCtrl.post)

module.exports = router;
