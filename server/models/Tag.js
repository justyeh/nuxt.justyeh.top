let db = require('../db/DBUtil');

class Tag {

    listByPostId(postId, callback) {
        let sql = "SELECT tags.id,tags.name FROM posts,tags,post_tags WHERE posts.id = post_tags.post_id AND tags.id = post_tags.tag_id AND posts.id = ?";
        db.query(sql, [postId], (err, result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }


    pageList(callback) {
        let sql = "SELECT id,name FROM tags";
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
    }
}

module.exports = Tag;