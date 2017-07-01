let mysql = require('mysql');
let serverCfg = require('../../util/mysql.config')

let pool = mysql.createPool(serverCfg.db);

let query = function (sql, params, callback) {
    try {
        pool.getConnection((err, connection) => {
            if (err) {
                return callback(true);
            }
            //链接
            connection.query(sql, params, (err, result) => {
                //释放链接
                connection.release();
                if (err) {
                    console.error('db error17:' + err)
                    return callback(true);
                }
                callback(false, result);
            });
        });
    } catch (error) {
        console.error('db error24:' + err)
        return callback(true);
    }
}

module.exports.query = query;

