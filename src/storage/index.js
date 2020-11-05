/**
 * 封装Storage
 */
const STORAGE_KEY = 'mall';
export default {
  // 设置值
  setItem(key, value, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      val[key] = value;
      this.setItem(moduleName, val);
    } else {
      const storage = this.getStorage();
      storage[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    }
  },
  // 获取某个storage
  getItem(key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      if (val) {
        return val[key];
      }
    }
    return this.getStorage()[key];
  },
  // 获取整个mall信息
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clearItem(key, moduleName) {
    const storage = this.getStorage();
    if (moduleName) {
      if (!storage[moduleName]) {
        return;
      }
      delete storage[moduleName][key];
    } else {
      delete storage[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  }
};
