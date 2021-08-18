import React, { useState, useMemo } from "react";
import { Input, Button, Space, Divider } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import "./index.less";

const TodoList = () => {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (inputVal) {
      setList((list) => [
        ...list,
        {
          name: inputVal,
          done: false,
          id: Date.now(),
        },
      ]);
      setInputVal("");
    }
  };

  const onFinishTask = (id) => {
    const index = list.findIndex((item) => item.id === id);
    list[index].done = true;
    setList([...list]);
  };

  const onDeleleTask = (id) => {
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    setList([...list]);
  };

  const [doneList, undoList] = useMemo(() => {
    const finishedList = list.filter((item) => item.done);
    const unFinishList = list.filter((item) => !item.done);
    return [finishedList, unFinishList];
  }, [list]);

  return (
    <div className="todolist">
      <h2 className="todolist-title">Todo List</h2>

      <section className="todolist-top">
        <Space>
          <Input
            placeholder="Add a task here..."
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            onPressEnter={addTask}
            value={inputVal}
          />
          <Button type="primary" onClick={addTask}>
            Add Task
          </Button>
        </Space>
      </section>

      <section className="todolist-main">
        <p className="todolist-main-title">Undo: {undoList.length}</p>
        {undoList.map((item) => (
          <div className="todolist-main-item" key={item.id}>
            <p>{item.name}</p>
            <span style={{ cursor: "pointer" }}>
              <Space>
                <CheckCircleOutlined onClick={() => onFinishTask(item.id)} />
                <DeleteOutlined
                  onClick={() => onDeleleTask(item.id)}
                  style={{ color: "#f5222d" }}
                />
              </Space>
            </span>
          </div>
        ))}
      </section>

      <Divider />

      <p className="todolist-main-title">Done: {doneList.length}</p>
      {doneList.map((item) => (
        <div className="todolist-main-item" key={item.id}>
          <p> {item.name}</p>
          <DeleteOutlined
            onClick={() => onDeleleTask(item.id)}
            style={{ color: "#f5222d" }}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
