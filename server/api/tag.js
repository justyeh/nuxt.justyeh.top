let express = require('express');
let router = express.Router();

//services
let tagSys = require('../service/TagSys');

router.get('/tag/detail/:id', function (req, res, next) {
  try {
    tagSys.getTagByTagId(req.params.id, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

/*
router.get('/tag/page/:pageNo', function(req, res, next) {
  let tagId = req.params.id;
  TagSys.getPageTags(tagId,function(data){
    res.json(data)
  });
});

router.get('/tag/list/:id', function(req, res, next) {
  let tagId = req.params.id;
  TagSys.getTagsByPostId(tagId,function(data){
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
});*/

module.exports = router;
