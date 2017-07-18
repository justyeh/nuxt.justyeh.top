import * as axios from 'axios'
import { getCookieInClient } from '../util/assist'

export default ({ app, store, redirect }) => {

  // The server-side needs a full url to works
  if (process.SERVER_BUILD) {
    axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
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
      redirect('/login')
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

}