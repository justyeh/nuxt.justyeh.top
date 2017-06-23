let db = require('../db/DBUtil');

export default class Post {

    list(callback){
        let sql = 'SELECT id,title,image,meta_description,updated_at FROM posts';
        db.query(sql,[],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    one(postId,callback){
        let sql = 'SELECT * FROM posts where id = ?';
        db.query(sql,[postId],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    update(post,callback){
        let fields = [],
            params = [];
        for (var field in post) {
            if(field === 'id'){
                continue;
            }
            fields.push(field + ' = ?');
            params.push(post[field])
        }
        params.push(post.id);
        let sql = 'UPDATE posts SET '+ fields.join(',') +' WHERE id = ?';
        db.query(sql, params, (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.changedRows);
        });
    }
}
