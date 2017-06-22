let express = require('express');
let router = express.Router();

//services
let TagSys = require('../service/TagSys');

router.get('/tag', function(req, res, next) {
  TagSys.list(function(data){
    res.json(data)
  });
});

router.get('/tag/:id', function(req, res, next) {
  let tagId = req.params.id;
  TagSys.getPostById(tagId,function(data){
    res.json(data)
  });
});

router.post('/tag/add', function(req, res, next) {
  let tagId = req.params.id;
  TagSys.getPostById(tagId,function(data){
    res.json(data)
  });
});

router.post('/tag/update', function(req, res, next) {
  let tagId = req.params.id;
  TagSys.getPostById(tagId,function(data){
    res.json(data)
  });
});

router.post('/tag/del', function(req, res, next) {
  let tagId = req.params.id;
  TagSys.getPostById(tagId,function(data){
    res.json(data)
  });
});

module.exports = router;
