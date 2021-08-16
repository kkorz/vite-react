import React from "react";
import WithLoading from "@/core/hoc/WithLoading";

const DispalyComponent = () => {
  return (
    <div style={{ padding: "10px", border: ".5px solid red" }}>
      <p>我是展示组件</p>
      <p>被WithLoading包裹</p>
      <p>会根据传入的loading属性展示Loading状态</p>
    </div>
  );
};

export default WithLoading(DispalyComponent);
