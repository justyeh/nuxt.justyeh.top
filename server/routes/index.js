var express = require('express');
var router = express.Router();

var api = require('./api');

router.get('/', function(req, res, next) {
  res.send('叶文祥的前端博客');
});

router.get('/api', api);

module.exports = router;
