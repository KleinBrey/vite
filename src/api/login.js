import request from "../axios";

export const userToken = params => {
  return request("get", `login`, params, false);
};
export const getMenulist = params => {
  return request("get", `menu`, params, false);
};

