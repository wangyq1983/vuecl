var ver = 'v1';
var host = process.env.API_HOST + ver;
const YUJING_API = host + "/warning/list";
const LOGIN_API = host + "/sysuser/login";
const DETAIL_API = host + "/entity/get_info"
module.exports = {
  YUJING_API,
  LOGIN_API,
  DETAIL_API
}
