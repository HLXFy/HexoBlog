//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '休息一下马上回来';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '欢迎回来awa ';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});