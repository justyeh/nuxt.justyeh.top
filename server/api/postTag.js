let express = require('express');
let router = express.Router();

//services
let postTagSys = require('../service/PostTagSys');

router.post('/del', (req, res, next) => {
  try {
    postTagSys.delPostTag(req.body.postTagId, result => res.json(result))
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.post('/add', (req, res, next) => {
  try {
    postTagSys.addPostTag(req.body.postTag, result => res.json(result))
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

module.exports = router;
