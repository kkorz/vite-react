import React from "react";
import { observer, inject } from "mobx-react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  state = {
    inputRef: React.createRef(),
  };

  addItem = (e) => {
    e.preventDefault();
    const { inputRef } = this.state;
    const { createItem } = this.props.todolist;

    if (inputRef.current.value) {
      createItem(inputRef.current.value);
      inputRef.current.value = "";
    } else {
      alert("输入不能为空");
    }
  };

  render() {
    const { inputRef } = this.state;
    const { len } = this.props.todolist;

    return (
      <>
        <header>
          <form onSubmit={this.addItem}>
            <input type="text" placeholder="请输入待办事项" ref={inputRef} />
          </form>
        </header>
        <section>
          <TodoItem />
        </section>
        <footer> 未完成任务数 {len}</footer>
      </>
    );
  }
}

export default inject("todolist")(observer(TodoList));
