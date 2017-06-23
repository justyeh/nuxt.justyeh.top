let db = require('../db/DBUtil');

export default class Post {
    
    constructor(id,title,image,meta_description,markdown,status,tags,updated_at){
        this.id = id,
        this.title = title,
        this.image = image,
        this.meta_description = meta_description,
        this.markdown = markdown,
        this.status = status,
        this.tags = tags,
        this.updated_at = updated_at
    }

    update(callback){
        let sql = "UPDATE posts SET (NULL,?,?,?,?) WHERE id = ?";
        db.query(sql, [post], (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.insertId);
        });
    }

    list(callback){
        let sql = "SELECT id,title,image,meta_description,updated_at FROM posts";
        db.query(sql,[],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    one(callback){
        let sql = "SELECT * FROM posts where id = ?";
        db.query(sql,[this.id],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    update(callback){
        console.log(this.id)
        let sql = "UPDATE posts SET (NULL,?,?,?,?) WHERE id = ?";
        db.query(sql, [post], (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.insertId);
        });
    }
}
