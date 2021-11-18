// src/router/routes.js
const home = () => import("../page/home.vue");
const login = () => import("../page/login/index.vue");
const dashboard = () => import("../page/dashboard/index.vue");

const promise = () => import("../page/promise.vue");
const jswork = () => import("../page/36jswork.vue");
const Page404 = () => import("/@/components/Page404.vue");
const vueFunction = () => import("/@/page/vueFunction/index.vue");
const buttoneffect = () => import("/@/page/vueFunction/buttoneffect/index.vue");

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    children:[
      {
        path: "/home",
        name: "home",
        component: home
      },
      {
        path: "/promise",
        name: "promise",
        component: promise
      },
      {
        path: "/jswork",
        name: "jswork",
        component: jswork
      },
      {
        path: "/vueFunction",
        name: "vueFunction",
        component: vueFunction
      },
      {
        path: "/vueFunction/buttoneffect",
        name: "buttoneffect",
        component: buttoneffect
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Page404
  }
];
export default routes;
