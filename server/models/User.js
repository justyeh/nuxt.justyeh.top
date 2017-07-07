let crypto = require('crypto')

let db = require('../util/DBUtil')

export default class User {

    //验证用户名密码
    auth(user, callback) {
        let sql = "SELECT id FROM users WHERE account = ? AND password = ?";

        //加密密码
        user.password = crypto.createHash('sha1').update(user.password).digest('hex');

        db.query(sql, [user.account, user.password], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }
}

