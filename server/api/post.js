let express = require('express');
let router = express.Router();

//services
let PostSys = require('../service/PostSys');

router.get('/post', function (req, res, next) {
  PostSys.list(function (data) {
    res.json(data)
  });
});

router.get('/post/:id', function (req, res, next) {
  try {
    PostSys.getPostById(req.params.id, function (data) {
      res.json(data)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }

});

router.post('/post/update', function (req, res, next) {
  try {
    PostSys.updatePost(req.body.post, function (data) {
      res.json(data)
      return
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});


module.exports = router;
