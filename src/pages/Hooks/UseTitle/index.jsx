import React, { useState } from "react";
import { Input, Space } from "antd";
import { useTitle } from "@/core/hooks/useTitle";

const Index = () => {
  const [title, setTitle] = useState("");
  useTitle(title);

  return (
    <>
      <h2>
        当前页面的title是：<span style={{ color: "green" }}>{title}</span>
      </h2>
      <Space>
        <span>请输入页面标题: </span>
        <Input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{ width: 200 }}
          placeholder="请输入"
        />
      </Space>
    </>
  );
};

export default Index;
