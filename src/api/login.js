import request from "../axios";

export const userToken = params => {
  return request("get", `login`, params, false);
};
export const register = params => {
  return request("get", `registe`, params, false);
};
export const getMenulist = params => {
  return request("get", `menu`, params, false);
};
export const logOut = params => {
  return request("post", `logout`, params, false);
};
export const getUser = params => {
  return request("get", `getUser`, params, false);
};
export const setUser = params => {
  return request("post", `setUser`, params, false);
};
export const updataUser = params => {
  return request("patch", `updataUser`, params, false);
};
