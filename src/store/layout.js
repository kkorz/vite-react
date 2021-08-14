import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  collapseStatus = false;

  // 共享状态pathname, 用以面包屑更新
  pathname = location.pathname;

  setCollapseStatus = (status) => {
    this.collapseStatus = status;
  };

  setPathname = (pathname) => {
    this.pathname = pathname;
  };
}

export default new Store();
