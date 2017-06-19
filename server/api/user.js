let express = require('express');
let router = express.Router();

//services
var UserSys = require('../service/UserSys');

router.get('/user', function(req, res, next) {
  UserSys.list(function(data){
    res.json(data)
  });
});

router.get('/user/:userID', function(req, res, next) {
  let userID = req.params.userID;
  UserSys.getUserById(userID,function(data){
    res.json(data)
  });
});

module.exports = router;
