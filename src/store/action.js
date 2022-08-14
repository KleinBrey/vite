import { userToken, getMenulist } from "/@/api/login";
import * as types from "./mutation-types";
import { ElMessage } from "element-plus";

const actions = {
  setToken({ commit }, val) {
    return new Promise((resolve, reject) => {
      userToken(val)
        .then(res => {
          if (res.code === 0) {
            resolve(res);
            commit(types.ACCESS_TOKEN, res.data.token);
            getMenulist().then(res => {
              commit(types.MENU_LIST, res.data);
            });
          } else {
            ElMessage({
              type: "error",
              message: res.message || "登录接口错误!!!"
            });
          }
        })
        .catch(error => reject(error));
    });
  }
};
export default actions;
