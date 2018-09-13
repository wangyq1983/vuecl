import axios from 'axios'
import *as Util from '../util';
import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from './myaxioshelp'
import router from '../router/index'

// 创建axios实例
const $ = axios.create({
  timeout: 15000,
});

// 封装的axios方法


// 请求拦截器
$.interceptors.request.use((config) => {
  console.log('request ljq');
  console.log(config);
  if (config.showLoading) {
    showFullScreenLoading();
    // if (config.headers.YJJTOKEN == null) {
    //   router.push({
    //     path: "/login"
    //   })
    // }
  }
  return config
}, (error) => {
  return Promise.reject(error)
});

// 响应拦截器
$.interceptors.response.use((response) => {
  if (response.config.showLoading) {
    tryHideFullScreenLoading()
  }
  console.log('response ljq');
  console.log(response);
  console.log(response.data.state)
  console.log(typeof response.data.state);
  if (response.data.state == 601 || response.data.state == 701) {
    // router.push({
    //   path: "/login"
    // })
  } else {
    return response
  }
}, (error) => {
  tryHideFullScreenLoading()
  return Promise.reject(error)
});

/**
 * 重新封装axios的get请求并执行回调函数
 * @param url  请求地址
 * @param config  请求参数
 * @param cb  要执行的回调函数
 */
var reqGet =(url,config,cb)=>{
  let defparams = {
    province:53
  };
  Object.assign(config.params,defparams);
  $.get(url,{
    showLoading: true,
    headers:{
      'YJJSID': Util.getCookie('sid'),
      'YJJUSERNAME': Util.getCookie('username'),
      'YJJTOKEN': Util.getCookie('token')
    },
    params: config.params
  }).then(response =>{
    cb(response);
  }).catch(function(error) {
    console.log(error);
  });
};

const defaultConfig = {
  showLoading: true,
  headers:{
    'YJJSID': Util.getCookie('sid'),
    'YJJUSERNAME': Util.getCookie('username'),
    'YJJTOKEN': Util.getCookie('token')
  }
};
export default {
  get: (url, config) => $.get(url, {...defaultConfig, ...config}),
  put: (url, data, config) => $.put(url, data, {...defaultConfig, ...config}),
  post: (url, data, config) => $.post(url, data, {...defaultConfig, ...config}),
  patch: (url, data, config) => $.patch(url, data, {...defaultConfig, ...config}),
  delete: (url, data, config) => $.delete(url, {...defaultConfig, ...config}),
  reqGet:(url,config,cb) => reqGet(url,{...defaultConfig, ...config},cb)
}
