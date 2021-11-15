import storage from "/@/utils/storage";

const state = {
  name: "",
  token: ""
};
const token = storage.getValue("ACCESS_TOKEN");
if (token) {
  state.token = token;
}
export default state;
