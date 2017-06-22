let db = require('../db/DBUtil');

export default class Post {
    
    constructor(id,title,image,meta_description,markdown,status,tags){
        this.id = id,
        this.title = title,
        this.image = image,
        this.meta_description = meta_description,
        this.markdown = markdown,
        this.status = status,
        this.tags = tags
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
        //连接池
        db.query(sql,[this.id],(err,result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }
}
