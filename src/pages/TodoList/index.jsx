import React, { useState, useMemo } from "react";
import { Input, Button, Space, Divider, message } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMount } from "@/core/hooks";
import Service from "./Service";
import { HTTP_STATUS_CODE } from "@/config/global";
import styles from "./index.module.less";

const TodoList = () => {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);

  const getList = async () => {
    const res = await Service.getTaskList();
    const { data, status } = res;

    if (status === HTTP_STATUS_CODE.STATUS_OK) {
      setList(data);
    }
  };

  useMount(() => {
    getList();
  });

  const addTask = async () => {
    if (inputVal) {
      const res = await Service.addTask({ name: inputVal, done: false });
      if (res.status === HTTP_STATUS_CODE.STATUS_CREATED) {
        message.success("新增成功");
        getList();
        setInputVal("");
      }
    }
  };

  const onFinishTask = async (id) => {
    const res = await Service.updateTask({ id, done: true });
    if (res.status === HTTP_STATUS_CODE.STATUS_OK) {
      message.success("已完成");
      getList();
    }
  };

  const onDeleleTask = async (id) => {
    const res = await Service.deleteTask({ id });
    if (res.status === HTTP_STATUS_CODE.STATUS_OK) {
      message.success("删除成功");
      getList();
    }
  };

  const [doneList, undoList] = useMemo(() => {
    const finishedList = list.filter((item) => item.done);
    const unFinishList = list.filter((item) => !item.done);
    return [finishedList, unFinishList];
  }, [list]);

  return (
    <div className={styles.todolist}>
      <h2 className={styles["todolist-title"]}>Todo List</h2>

      <section className={styles["todolist-top"]}>
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

      <section className={styles["todolist-main"]}>
        <p className={styles["todolist-main-title"]}>Undo: {undoList.length}</p>
        {undoList.map((item) => (
          <div className={styles["todolist-main-item"]} key={item.id}>
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

      <p className={styles["todolist-main-title"]}>Done: {doneList.length}</p>
      {doneList.map((item) => (
        <div className={styles["todolist-main-item"]} key={item.id}>
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
