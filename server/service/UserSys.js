var User = require('../models/User')

var user = new User();

var list = (callback) => {
    user.list((err,result) => {
        if(err){
            callback({code:404,msg:'no result'});
        }
        callback({code:200, msg:'success',list:result});
    });
}

var getUserById = (postID,callback) => {
    user.one(userID,(err,result) => {
        if(err){
            callback({code:404,msg:'no result'});
        }
        callback({code:200, msg:'success',list:result});
    });
}

module.exports.list = list;
module.exports.getUserById = getUserById;
