let db = require('../db/DBUtil');

class Tag {

    //根据TagId获取Tag
    one(tagId,callback) {
        let sql = "SELECT id,name,description FROM tags where id = ?";
        db.query(sql, [tagId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result[0]);
        });
    }

    /*add(callback) {
        let sql = "INSERT INTO tags VALUES (NULL,?,?,?,?)";
        db.query(sql, [postID], (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.insertId);
        });
    }

    update(callback) {
        let sql = "UPDATE tags SET (NULL,?,?,?,?) WHERE id = ?";
        db.query(sql, [tag], (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.insertId);
        });
    }

    del(callback) {
        let sql = "UPDATE tags SET hidden = 1 WHERE id = ?";
        db.query(sql, [postID], (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.insertId);
        });
    }*/
}

module.exports = Tag;