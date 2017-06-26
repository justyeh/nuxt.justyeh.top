let db = require('../db/DBUtil');
import {objectToSQLWhrer} from '../../util/assist'

export default class Post {
    all(callback){
        let sql = 'select count(1) form SELECT id,title,image,meta_description,updated_at,status FROM posts ORDER BY id DESC';
        db.query(sql,[],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    published(callback){
        let sql = 'SELECT id,title,image,meta_description,updated_at FROM posts WHERE status = ? ORDER BY id DESC';
        db.query(sql,['published'],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    where(post,callback){
        let sql = 'SELECT  id,title,image,meta_description,updated_at FROM posts WHERE '+ objectToSQLWhrer(post) +' WHERE id = ?';
        db.query(sql,['published'],(err,result) => {
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
        post.updated_at = new Date().getTime();
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
