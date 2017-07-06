import User from '../models/User'

let userModel = new User();

let auth = (user, callback) => {
    if (user.account.trim() == '') {
        return callback({ code: 403, message: '用户名不正确' });
    }
    if (user.password.trim() == '') {
        return callback({ code: 403, message: '密码不正确' });
    }
    userModel.auth(user, (err, user) => {
        if (err) {
            return callback({ code: 404, message: '登陆失败' });
        }
        if (user.length === 0) {
            return callback({ code: 403, message: '用户名或密码错误' });
        }


        userModel.setToken(user[0], (err, result) => {
            if (err) {
                return callback({ code: 404, message: '登陆失败' });
            }
            callback({ code: 200, message: 'success', token: result});
        })

    });
}

module.exports.auth = auth;
