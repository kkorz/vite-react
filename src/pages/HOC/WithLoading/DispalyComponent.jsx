import React from "react";
import { Card } from "antd";
import WithLoading from "@/core/hoc/WithLoading";

const DispalyComponent = () => {
  return (
    <Card>
      <p>我是展示组件</p>
      <p>被WithLoading包裹</p>
      <p>会根据传入的loading属性展示Loading状态</p>
    </Card>
  );
};

export default WithLoading(DispalyComponent);
