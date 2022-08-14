const storage = {
  setValue: (name, val) => {
    sessionStorage.setItem(name, val);
  },
  getValue: name => {
    return sessionStorage.getItem(name);
  },
  removeValue: name => {
    sessionStorage.removeItem(name);
  }
};
export default storage;
