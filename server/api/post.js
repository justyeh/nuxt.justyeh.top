let express = require('express');
let router = express.Router();

//services
let PostSys = require('../service/PostSys');

router.get('/post', function(req, res, next) {
  PostSys.list(function(data){
    res.json(data)
  });
});

router.get('/post/:postID', function(req, res, next) {

  let postID = req.params.postID;
  console.log(postID)
  PostSys.getPostById(2,function(data){
    res.json(data)
  });
});

module.exports = router;
