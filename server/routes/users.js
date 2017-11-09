var express = require('express');
var userCtrl = require('../controllers/user')
var router = express.Router();

/* GET users listing. */
router.get('/', userCtrl.get);

router.post('/', userCtrl.post)

router.post('/login', userCtrl.login)

module.exports = router;
