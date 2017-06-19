let mysql = require('mysql');
let serverCfg = require('../../server.config')

let pool = mysql.createPool(serverCfg.db);

let query = function(sql,params,callback){
    pool.getConnection( (err,connection) => {
        if (err) {
            callback(true);
            return;
        }
        //链接
        connection.query(sql,[params], (err,result) => {
             //释放链接
            connection.release();

            if(err){
                callback(true);
                return;
            }
            callback(false,result);
        });
    });
}

module.exports.query = query;