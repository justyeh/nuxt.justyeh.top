let express = require('express');
let router = express.Router();

//services
let postSys = require('../service/PostSys');

router.get('/page/:pageNo', function (req, res, next) {
  var params = {
    scope : req.query.scope || '',
    pageNo : req.params.pageNo || 0
  }
  try {
    postSys.list(params, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/detail/:id', function (req, res, next) {
  try {
    postSys.getPostById(req.params.id, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/list/:tagId', function (req, res, next) {
  try {
    postSys.getPostsByTagId(req.params.tagId, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.post('/add', function (req, res, next) {
  try {
    postSys.addPost(req.body.post, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.post('/update', function (req, res, next) {
  try {
    postSys.updatePost(req.body.post, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/count/:scope', function (req, res, next) {
  let scope = req.params.scope || '';
  try {
    postSys.getPostCount(scope, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

module.exports = router;
