let express = require('express');
let router = express.Router();

//services
var userSys = require('../service/UserSys');

/*登陆*/
router.post('/login', function(req, res, next) {
  let user = req.body.user || null;
  userSys.auth(user,function(data){
    res.json(data)
  });
});

module.exports = router;
