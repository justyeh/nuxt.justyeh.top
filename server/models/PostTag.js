
let db = require('../db/DBUtil');

class PostTag {

    //根据PostId获取Tag列表
    tagsByPostId(postId, callback) {
        let sql = "SELECT tags.id,tags.name FROM posts,tags,post_tags WHERE posts.id = post_tags.post_id AND tags.id = post_tags.tag_id AND posts.id = ?";
        db.query(sql, [postId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }
    //根据TagId获取Post列表
    postsByTagId(tagId,callback){
        let sql = 'SELECT posts.id,posts.title,posts.image,posts.meta_description FROM posts,post_tags WHERE posts.id = post_tags.post_id AND posts.status = "published" AND post_tags.tag_id = ?';
        db.query(sql, [tagId], (err, result) => {
            if (err) {
                return callback(true);
            }
            callback(false, result);
        });
    }
}

module.exports = PostTag;