const cookie = {
  //设置cookie
  setCookie: (name, pwd, exdays) => {
    let exdate = new Date(); //获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
    //字符串拼接cookie
    window.document.cookie =
      "userName" + "=" + name + ";path=/;expires=" + exdate.toGMTString();
    window.document.cookie =
      "passWord" + "=" + pwd + ";path=/;expires=" + exdate.toGMTString();
  },
  //读取cookie
  getCookie: () => {
    if (document.cookie.length > 0) {
      let obj = {};
      let alldate = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
      for (let i = 0; i < alldate.length; i++) {
        let arr = alldate[i].split("="); //再次切割
        obj[arr[0]] = arr[1];
        Object.assign(obj);
      }
      //以键值对形式抛出
      return obj;
    }
  },
  //清除cookie
  clearCookie: () => {
    cookie.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
  }
};
export default cookie;
