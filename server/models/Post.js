let db = require('../db/DBUtil');

let Post = function() {};

Post.prototype.list = (callback) => {
    let sql = "SELECT id,title FROM posts";
    db.query(sql,[],(err,result) => {
        if (err) {
            return;
        }
        callback(false, result);
    });
}

Post.prototype.one = (postID,callback) => {
    let sql = "SELECT * FROM posts where id = ?";
    //连接池
    db.query(sql,[postID],(err,result) => {
        if (err) {
            callback(true);
            return;
        }
        callback(false, result);
    });
}


module.exports = Post;