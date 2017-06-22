let db = require('../db/DBUtil');

class Tag {
    constructor(id, name, description, hidden){
        this.id = id;
        this.name = id;
        this.description = id;
        this.hidden = id;
    }

    list(callback) {
        let sql = "SELECT id,name,description FROM tags";
        db.query(sql, [], (err, result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    one(callback) {
        let sql = "SELECT * FROM tags where id = ?";
        db.query(sql, [postID], (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result[0]);
        });
    }

    add(callback) {
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
        let sql = "UPDATE tags SET (NULL,?,?,?,?)";
        db.query(sql, [postID], (err, result) => {
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
    }
}

module.exports = Tag;