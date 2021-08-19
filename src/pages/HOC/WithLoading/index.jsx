import React, { useState } from "react";
import { Button, Divider } from "antd";
import DispalyComponent from "./DispalyComponent";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const fetchRemote = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <h2>WithLoading</h2>
      <h3>
        利用高阶函数（HOC）进行<strong>渲染劫持</strong>
        ，根据传入的loading状态决定展示Loading组件还是目标组件
      </h3>
      <DispalyComponent loading={loading} />

      <Divider />
      <Button type="primary" onClick={fetchRemote}>
        模拟请求接口
      </Button>
    </>
  );
};

export default Index;
