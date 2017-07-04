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

router.get('/tag/search/:tagName', function (req, res, next) {
  try {
    tagSys.searchTagsByName(req.params.tagName, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});


router.post('/tag/add/', function (req, res, next) {
  try {
    tagSys.addTag(req.body.tagName, function (result) {
      res.json(result)
    });
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

module.exports = router;
