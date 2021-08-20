import React, { useRef } from "react";
import { Button, Divider, Space } from "antd";
import ChildRef from "./ChildRef";

const Index = (props) => {
  const { children } = props;
  const ref = useRef();

  const clickBtn = (step = 1) => {
    ref.current.addCount(step);
  };

  return (
    <div>
      <h2>此页面用来演示父组件通过传递Ref到子组件，实现直接调用子组件的方法</h2>
      <Divider />

      <ChildRef childRef={ref}>{children}</ChildRef>

      <h4>调用子组件方法</h4>
      <Space>
        <Button onClick={() => clickBtn()} type="primary">
          点我 + 1
        </Button>
        <Button onClick={() => clickBtn(4)} type="dashed">
          点我 + 4
        </Button>
      </Space>
    </div>
  );
};

export default Index;
