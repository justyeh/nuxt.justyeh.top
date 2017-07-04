let express = require('express');
let router = express.Router();

let user = require('./user');
let post = require('./post');
let tag = require('./tag');
let postTag = require('./postTag');

router.get('/', function(req, res, next) {
  console.log('/')
  res.json({ message: '欢迎使用justyeh的API服务！' });
});


router.post('/user/login', user);

router.get('/post/page/:pageNo', post);
router.get('/post/detail/:id', post);
router.get('/post/count/:scope', post);
router.get('/post/list/:tagId', post);
router.post('/post/add', post);
router.post('/post/update', post);

router.post('/post/tag/del', postTag);
router.post('/post/tag/add', postTag);

router.get('/tag/detail/:id', tag);
router.get('/tag/search/:tagNme', tag);
router.post('/tag/add', tag);

module.exports = router;