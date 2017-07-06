let db = require('../db/DBUtil')

const crypto = require('crypto')
let jwt = require('jwt-simple')

const secret = 'justyeh'


export default class User {

    //验证用户名密码
    auth(user, callback) {
        let sql = "SELECT id,name,image,email,bio,website,location FROM users WHERE account = ? AND password = ?";

        //加密密码
        user.password = crypto.createHash('sha1').update(user.password).digest('hex');

        db.query(sql, [user.account, user.password], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }

    //设置token
    setToken(user, callback) {
        let token = jwt.encode({
            id: user.id,
            date: new Date().getTime()
        }, secret)

        let sql = "UPDATE users SET token = ? WHERE id = ?"

        db.query(sql, [token, user.id,], (err, result) => {
            if (err) {
                return callback(true);
            }
            if (result.changedRows === 1) {
                return callback(false, token);
            }
            callback(true);
        });
    }

}

