/*let mysql = require('mysql')*/

export function formatDate(timestamp) {
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

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)

  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前')
  } else {
    return pluralize(~~(between / 86400), ' 天前')
  }
}

export function getCookiesInServer(req) {
  let Cookies = {};
  req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
    let parts = Cookie.split('=');
    Cookies[parts[0].trim()] = (parts[1] || '').trim();
  });
  return Cookies;
}


export function setCookieInClient(name, value) {
  let Days = 30;
  let exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


export function getCookieInClient(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

export function seo() {
  let bp = document.createElement('script');
  let curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
}