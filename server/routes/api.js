var express = require('express');
var router = express.Router();

//services
var UserSys = require('../service/UserSys');

router.get('/', function(req, res, next) {
  res.json({ message: '欢迎使用justyeh的API服务！' });
});

router.get('/user', function(req, res, next) {
  UserSys.list(function(data){
    res.json(data)
  });
});
router.get('/user/:userID', function(req, res, next) {
  var userID = req.params.userID;
  UserSys.getUserById(userID,function(data){
    res.json(data)
  });
});

module.exports = router;
