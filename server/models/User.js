let db = require('../db/DBUtil');
const crypto = require('crypto');

let User = function () { };

User.prototype.auth = (user, callback) => {
    let sql = "SELECT id,name,image,email,bio,website,location FROM users WHERE account = ? AND password = ?";
    //加密
    user.password = crypto.createHash('sha1').update(user.password).digest('hex');

    db.query(sql, [user.account, user.password], (err, result) => {
        if (err) {
           return callback(true);
        }
        callback(false, result);
    });
}

User.prototype.one = (userID, callback) => {
    let sql = "SELECT * FROM users where id = ?";
    db.query(sql, [userID], (err, result) => {
        if (err) {
            return callback(true);
        }
        callback(false, result[0]);
    });
}

module.exports = User;