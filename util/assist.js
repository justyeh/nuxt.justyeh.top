/*let mysql = require('mysql')*/

function formatDate(timestamp) {
    let date = new Date(timestamp);
    return date.getYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

/*function objectToSQLWhrer(object){
    var where = '1 = 1'
    for (var key in object) {
       where += ' AND ' + key + ' = ' + mysql.escape(object[key]);
    }
    return where;
}*/

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)

  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前')
  } else {
    return pluralize(~~(between / 86400), ' 天前')
  }
}


export {
    formatDate,
    objectToSQLWhrer
}
