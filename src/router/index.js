// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import storage from "/@/utils/storage";

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  const token = storage.getValue("ACCESS_TOKEN");
  if (token) {
    console.log(to.path, from.path);
    next();
  } else {
    console.log(to.path, from.path);
    if (to.path !== "/login") {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});
export default router;
