import React from "react";
import { observer, inject } from "mobx-react";

class TodoItem extends React.Component {
  onDel = (title) => {
    const { delItem } = this.props.todolist;
    delItem(title);
  };

  render() {
    const { todos } = this.props.todolist;
    return (
      <ul>
        {todos.map((item) => (
          <li key={item.title} onClick={() => this.onDel(item.title)}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default inject("todolist")(observer(TodoItem));
