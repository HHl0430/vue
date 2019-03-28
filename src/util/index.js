const util = {};
//获取cookie的方法
util.setCookie = function(name, value, day) {
  var date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + "=" + value + ";expires=" + date;
};
//删除cookie的方法
util.delCookie = function(name) {
  this.setCookie(name, null, -1);
};
//注册cookie的方法
util.getCookie = function(name) {
  var reg = RegExp(name + "=([^;]+)");
  var arr = document.cookie.match(reg);
  if (arr) {
    return arr[1];
  } else {
    return "";
  }
};
export default util
