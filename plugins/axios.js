import * as axios from 'axios'
import { getCookieInClient } from '../util/assist'

export default ({ app, store }) => {

  if (process.SERVER_BUILD) {
    axios.default.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  }

  // interceptors request
  axios.interceptors.request.use(config => {
    if (typeof document === 'object') {
      let token = getCookieInClient('token')
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  }, err => {
    return Promise.reject(err);
  });

  axios.interceptors.response.use(response => {
    if (response.data.code === 401) {
      //jump to login page
      console.log(app)
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

}
