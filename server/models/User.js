let db = require('../db/DBUtil');

let User = function() {};

User.prototype.list = (callback) => {
    let sql = "SELECT * FROM users";
    db.query(sql,[],(err,result) => {
        if (err) {
            callback(true);
            return;
        }
        callback(false, result);
    });
}

User.prototype.one = (userID,callback) => {
    let sql = "SELECT * FROM users where id = ?";
    //连接池
    db.query(sql,[userID],(err,result) => {
        if (err) {
            callback(true);
            return;
        }
        callback(false, result[0]);
    });
}

module.exports = User;