import * as types from "./mutation-types";
const mutations = {
  increment(state, val) {
    // 变更状态
    state.name = val;
  },
  [types.ACCESS_TOKEN](state, val) {
    state.token = val;
  }
};
export default mutations;
