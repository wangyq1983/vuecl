export default {
  //定义的全局函数
  install(Vue, options) {
    Vue.prototype.formatDuring = function (a) {
      return a * a
      // var days = parseInt(mss / (1000 * 60 * 60 * 24));
      // var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = (mss % (1000 * 60)) / 1000;
      // return days + " 天 " + hours + " 小时 " + minutes + " 分 " + Math.round(seconds) + " 秒 ";
    },
      Vue.prototype.tete = function (i) {
        return i + i;
      }
      // Vue.prototype.getCookie = function (name) {
      //   var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      //   if (arr = document.cookie.match(reg)){
      //     return (arr[2]);
      //   }
      //   else
      //     return null;
      // },
      // Vue.prototype.setCookie = function (c_name, value, expiredays) {
      //   var exdate = new Date();
      //   exdate.setDate(exdate.getDate() + expiredays);
      //   document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
      // },
      // Vue.prototype.delCookie = function (name) {
      //   var exp = new Date();
      //   exp.setTime(exp.getTime() - 1);
      //   var cval = getCookie(name);
      //   if (cval != null){
      //     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      //   }
      // }
  }
}
//获取cookie、
export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
