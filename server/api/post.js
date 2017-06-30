let express = require('express');
let router = express.Router();

//services
let PostSys = require('../service/PostSys');

router.get('/post/page/:pageNo', function (req, res, next) {
  var params = {
    scope : req.query.scope || '',
    pageNo : req.params.pageNo || 0
  }
  try {
    PostSys.list(params, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/post/detail/:id', function (req, res, next) {
  try {
    PostSys.getPostById(req.params.id, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/post/list/:tagId', function (req, res, next) {
  try {
    PostSys.getPostsByTagId(req.params.tagId, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.post('/post/update', function (req, res, next) {
  try {
    PostSys.updatePost(req.body.post, function (result) {
      res.json(result)
      return
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/post/count/:scope', function (req, res, next) {
  let scope = req.params.scope || '';
  try {
    PostSys.getPostCount(scope, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

module.exports = router;
