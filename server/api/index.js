let express = require('express');
let router = express.Router();

let user = require('./user');
let post = require('./post');

router.get('/', function(req, res, next) {
  res.json({ message: '欢迎使用justyeh的API服务！' });
});


router.get('/user', user);
router.get('/user/:id', user);

router.get('/post', post);
router.get('/post/:id', post);

module.exports = router;