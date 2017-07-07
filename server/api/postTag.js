let express = require('express');
let router = express.Router();

//services
let postTagSys = require('../service/PostTagSys');

router.post('/del', function (req, res, next) {
  try {
    postTagSys.delPostTag(req.body.postTagId, function (result) {
      res.json(result)
    });
  } catch (error) {
    console.log(error)
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.post('/add', function (req, res, next) {
  try {
    postTagSys.addPostTag(req.body.postTag, function (result) {
      res.json(result)
    });
  } catch (error) {
    console.log(error)
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

module.exports = router;
