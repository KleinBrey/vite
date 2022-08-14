import * as types from "./mutation-types";
import storage from "/@/utils/storage";

const mutations = {
  increment(state, val) {
    // 变更状态
    state.name = val;
  },
  [types.ACCESS_TOKEN](state, val) {
    storage.setValue("ACCESS_TOKEN", val);
    state.token = val;
  },
  [types.MENU_LIST](state, val) {
    storage.setValue("menulist", JSON.stringify(val));
    state.menulist = val;
  }
};
export default mutations;
