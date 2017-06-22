let express = require('express');
let router = express.Router();

//services
let PostSys = require('../service/PostSys');

router.get('/post', function(req, res, next) {
  PostSys.list(function(data){
    res.json(data)
  });
});

router.get('/post/:id', function(req, res, next) {
  let postId = req.params.id;
  PostSys.getPostById(postId,function(data){
    res.json(data)
  });
});


module.exports = router;
