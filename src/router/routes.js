// src/router/routes.js
const firsthome = () => import("../page/home/index.vue");
const home = () => import("/@/page/jsfundamental/home.vue");
const login = () => import("../page/login/index.vue");
const dashboard = () => import("../page/dashboard/index.vue");
const promise = () => import("/@/page/jsfundamental/promise.vue");
const jswork = () => import("/@/page/jsfundamental/36jswork.vue");
const Page404 = () => import("/@/components/Page404.vue");
const vueFunction = () => import("/@/page/vueFunction/index.vue");
const buttoneffect = () => import("/@/page/vueFunction/buttoneffect/index.vue");
const jsfundamental = () => import("/@/page/jsfundamental/index.vue");
const prototype = () => import("/@/page/jsfundamental/prototype.vue");
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
    children: [
      {
        path: "/firsthome",
        name: "firsthome",
        component: firsthome
      },
      {
        path: "/home",
        name: "home",
        component: home
      },
      {
        path: "/jsfundamental",
        name: "jsfundamental",
        component: jsfundamental,
        children: [
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
            path: "/prototype",
            name: "prototype",
            component: prototype
          }
        ]
      },

      {
        path: "/vueFunction",
        name: "vueFunction",
        component: vueFunction,
        children: [
          {
            path: "/vueFunction/buttoneffect",
            name: "buttoneffect",
            component: buttoneffect
          }
        ]
      }
    ]
  },



  
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Page404
  }
];
export default routes;
