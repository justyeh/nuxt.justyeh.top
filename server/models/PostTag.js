
let db = require('../util/DBUtil');

export default class PostTag {

    //根据PostId获取Tag列表
    tagsByPostId(postId, callback) {
        let sql = "SELECT post_tags.id AS postTagId,tags.id AS tagId,tags.name FROM posts,tags,post_tags WHERE posts.id = post_tags.post_id AND tags.id = post_tags.tag_id AND posts.id = ?";
        db.query(sql, [postId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }
    //根据TagId获取Post列表
    postsByTagId(tagId, callback) {
        let sql = 'SELECT posts.id,posts.title,posts.image,posts.meta_description FROM posts,post_tags WHERE posts.id = post_tags.post_id AND posts.status = "published" AND post_tags.tag_id = ?';
        db.query(sql, [tagId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }

    //删除Post的Tag
    delPostTag(postTagId, callback) {
        let sql = 'DELETE FROM post_tags WHERE id = ?'
        db.query(sql, [postTagId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result.affectedRows);
        });
    }

    addPostTag(postTags, callback) {
        let sql = 'INSERT INTO post_tags (post_id,tag_id) VALUES ?'
        db.query(sql, [postTags], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result.insertId);
        });
    }

}