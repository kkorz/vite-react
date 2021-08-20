import React, { useState } from "react";
import WithParams from "@/core/hoc/WithParams";
import { Input, Button, Divider, Space } from "antd";

const Index = (props) => {
  const [inputVal, setInputVal] = useState("");
  const { params, history } = props;

  const changUrl = () => {
    if (inputVal) {
      history.push(`/hoc/withParams?name=${inputVal}`);
      return;
    }
    history.push(`/hoc/withParams`);
  };

  return (
    <div>
      <h2>WithParams</h2>
      <h3>利用高阶函数（HOC），向目标组件注入一些新的属性，例如params</h3>

      <Divider />
      <h3>
        当前页面的params是：
        <span style={{ color: "blue" }}>{params}</span>
      </h3>
      <Space>
        <Input
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          style={{ width: 200 }}
          placeholder="请输入参数name的值"
          allowClear
        />
        <Button onClick={changUrl} type="primary">
          点我改变Url
        </Button>
      </Space>
    </div>
  );
};

export default WithParams(Index);
