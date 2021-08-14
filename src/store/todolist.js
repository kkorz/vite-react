import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }

  todos = [];

  get len() {
    return this.todos.length;
  }

  createItem = (title) => {
    this.todos.push({
      title,
      finished: false,
    });
  };

  delItem = (title) => {
    this.todos = this.todos.filter((item) => item.title !== title);
  };
}

export default new store();
