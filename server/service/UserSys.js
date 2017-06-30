let User = require('../models/User');

let userModel = new User();

let auth = (user, callback) => {
    if (user.account.trim() == '') {
        return callback({ code: 403, message: '用户名不正确' });
    }
    if (user.password.trim() == '') {
        return callback({ code: 403, message: '密码不正确' });
    }
    userModel.auth(user,(err, user) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        if(user.length === 0){
            return callback({ code: 403, message: '用户名或密码错误' });
           
        }
        callback({ code: 200, message: 'success', list: user[0] });
    });
}

/*let getUserById = (postId,callback) => {
    userModel.one(postId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}*/

module.exports.auth = auth;
/*module.exports.getUserById = getUserById;*/
