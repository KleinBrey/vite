import storage from "/@/utils/storage";

const state = {
  name: "",
  token: "",
  menulist: ""
};
const token = storage.getValue("ACCESS_TOKEN");
const menulist = storage.getValue("menulist");

if (token) {
  state.token = token;
}
if (menulist) {
  state.menulist = JSON.parse(menulist) ;
}
export default state;
