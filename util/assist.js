let mysql = require('mysql')

function formatDate(timestamp) {
    let date = new Date(timestamp);
    return date.getYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}     

function objectToSQLWhrer(object){
    var where = '1 = 1'
    for (var key in object) {
       where += ' AND ' + key + ' = ' + mysql.escape(object[key]);
    }
    return where;
}

export {
    formatDate,
    objectToSQLWhrer
}
