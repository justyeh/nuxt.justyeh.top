var User = require('../models/User')

var user = new User();

var list = (callback) => {
    user.list((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

var getUserById = (postId,callback) => {
    user.one(postId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

module.exports.list = list;
module.exports.getUserById = getUserById;
