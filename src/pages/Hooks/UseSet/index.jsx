import React, { useState } from "react";
import { Button, Space, Divider, Input, List, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useSet } from "@/core/hooks/useSet";

const Index = () => {
  const [set, { add, has, remove, reset }] = useSet([]);
  const [inputVal, setInputVal] = useState("");

  const addItem = () => {
    if (inputVal) {
      if (!checkItem()) {
        add(inputVal);
        setInputVal("");
      } else {
        message.error("数据重复，请重新输入");
      }
    } else {
      message.warning("输入不能为空");
    }
  };

  const checkItem = () => {
    return has(inputVal);
  };

  return (
    <div>
      <h2>useSet用来对数据进行去重操作</h2>
      <Divider />

      <Space>
        <Input
          placeholder="请输入..."
          onChange={(e) => setInputVal(e.target.value)}
          onPressEnter={addItem}
          value={inputVal}
        />
        <Button onClick={addItem} type="primary">
          添加
        </Button>
        <Button onClick={reset} type="danger">
          清空
        </Button>
      </Space>

      <List
        header={<div>数据展示</div>}
        bordered
        dataSource={Array.from(set)}
        renderItem={(item) => (
          <List.Item style={{ display: "flex" }}>
            {item}
            <DeleteOutlined
              onClick={() => remove(item)}
              style={{ color: "red" }}
            />
          </List.Item>
        )}
        style={{ width: 330, marginTop: 20 }}
      />
    </div>
  );
};

export default Index;
