import * as axios from 'axios'

let options = {
}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

let $http = axios.create(options)

// 拦截request
/*$http.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
});*/

// 拦截response
/*$http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
*/

export default $http
