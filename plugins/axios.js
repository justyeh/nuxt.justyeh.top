import * as axios from 'axios'
import { getCookieInClient } from '../util/assist'

let options = {
}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

let $http = axios.create(options)

// 拦截request
$http.interceptors.request.use(
  config => {
    if (typeof document === 'object') {
      let token = getCookieInClient('token')
      if(token){
         config.headers.Authorization = token;
      }
     
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// 拦截response
$http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


export default $http
