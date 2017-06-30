let express = require('express');
let router = express.Router();

let user = require('./user');
let post = require('./post');
let tag = require('./tag');

router.get('/', function(req, res, next) {
  console.log('/')
  res.json({ message: '欢迎使用justyeh的API服务！' });
});


router.post('/user/login', user);

router.get('/post/page/:pageNo', post);
router.get('/post/detail/:id', post);
router.get('/post/count/:scope', post);
router.get('/post/list/:tagId', post);
router.post('/post/update', post);



router.get('/tag/detail/:id', tag);
router.post('/tag/add', tag);
router.post('/tag/del', tag);
router.post('/tag/update', tag);

module.exports = router;