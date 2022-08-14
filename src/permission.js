// 处理路由拦截器 导航守卫
import router from "./router";
import progresss from "nprogress";
import "nprogress/nprogress.css";
import storage from "/@/utils/storage";
const whiteList = ["/login"];

// 全局前置守卫  每次路由发生变化时 这个方法里的回调函数就会执行
router.beforeEach((to, from, next) => {
  progresss.start(); // 开启进度条
  const token = storage.getValue("ACCESS_TOKEN");
  console.log(666);

  // 看看是否有token
  if (token) {
    console.log(to.path, from.path);
    next(); // 放过
  } else {
    console.log(from.path, to.path);
    if (whiteList.indexOf(to.path) === -1) {
      next({ path: "/login" }); // 跳转到登录页
    } else {
      next(); // 直接放过
      next({ path: "/login" }); // 多个next，只有第一个next有效
    }
  }
});
router.afterEach(() => {
  //   setTimeout(() => progresss.done(), 1000)
  progresss.done();
  // 关闭进度条
});
