let express = require('express');
let router = express.Router();

//services
let tagSys = require('../service/TagSys');

router.get('/list', (req, res, next) => {
  try {
    tagSys.getTagList(result => res.json(result))
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/detail/:id', (req, res, next) => {
  try {
    tagSys.getTagByTagId(req.params.id, result => res.json(result))
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

router.get('/search/:tagName', (req, res, next) => {
  try {
    tagSys.searchTagsByName(req.params.tagName, result => res.json(result))
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});


router.post('/add', (req, res, next) => {
  try {
    tagSys.addTag(req.body.tagName, result => res.json(result))
  } catch (error) {
    res.json({ code: 500, message: '程序发生错误！' })
  }
});

module.exports = router;
