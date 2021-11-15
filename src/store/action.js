import state from "./state";
import { userToken } from "/@/api/login";
import * as types from "./mutation-types";
import { ElMessage } from "element-plus";
import storage from "/@/utils/storage";

const actions = {
  changename(context, val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("increment", val);
        if (state.name === "866") {
          resolve("成功");
        } else {
          reject("失败");
        }
      }, 1000);
    });
  },
  setToken({ commit }, val) {
    return new Promise((resolve, reject) => {
      userToken(val)
        .then(res => {
          if (res.code === 0) {
            resolve(res);
            storage.setValue('ACCESS_TOKEN',res.data.token)
            commit(types.ACCESS_TOKEN, res.data.token);
          } else {
            ElMessage({
              type: "error",
              message: "登录接口错误！！！"
            });
          }
        })
        .catch(error => reject(error));
    });
  }
};
export default actions;
