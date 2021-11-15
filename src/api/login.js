import request from "../axios";

export const userToken = params => {
  return request("get", `login`, params, false);
};
// export const userToken = paramsList => {
//   return myAxios(
//     {
//       url: "login",
//       method: "get",
//       params: paramsList
//     },
//     {
//       loading: true
//     },
//     {
//       text: "获取列表数据...."
//     }
//   );
// };
