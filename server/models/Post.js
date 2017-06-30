let db = require('../db/DBUtil');
let pageCfg = require('../../util/api.config')

/*import {objectToSQLWhrer} from '../../util/assist'*/

export default class Post {

    //根据页码获取当前页Post列表
    list(params, callback) {
        let sql = 'SELECT id,title,image,meta_description,updated_at,status FROM posts ';
        if (params.scope === 'published') {
            sql += ` WHERE status = '${params.scope}' `
        }
        sql += 'ORDER BY id DESC '
        sql += `LIMIT ${params.pageNo * pageCfg.pageSize},${pageCfg.pageSize}`
        db.query(sql, [], (err, result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    //根据PostId获取Post详情
    one(postId, callback) {
        let sql = 'SELECT * FROM posts where id = ?';
        db.query(sql, [postId], (err, result) => {
            if (err) {
                return;
            }
            callback(false, result);
        });
    }

    //更新Post
    update(post, callback) {
        post.updated_at = new Date().getTime();
        let fields = [],
            params = [];
        for (var field in post) {
            if (field === 'id') {
                continue;
            }
            fields.push(field + ' = ?');
            params.push(post[field])
        }
        params.push(post.id);
        let sql = 'UPDATE posts SET ' + fields.join(',') + ' WHERE id = ?';
        db.query(sql, params, (err, result) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, result.changedRows);
        });
    }

    //获取Post总数
    count(scope, callback) {
        let sql = 'SELECT COUNT(id) AS count FROM posts';
        if (scope === 'published') {
            sql += ` WHERE status = '${scope}'`
        }
        db.query(sql, [], (err, result) => {
            if (err) {
                return;
            }
            callback(false, result[0].count);
        });
    }
}