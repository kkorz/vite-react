import React, { useRef } from "react";
import ChildRef from "./ChildRef";

const Index = (props) => {
  const { children } = props;
  const ref = useRef();

  const clickBtn = (step = 1) => {
    ref.current.addCount(step);
  };

  return (
    <div>
      <ChildRef childRef={ref}>{children}</ChildRef>
      <p>调用子组件方法</p>
      <button onClick={() => clickBtn()}>点我 + 1</button>
      <button onClick={() => clickBtn(4)}>点我 + 4</button>
    </div>
  );
};

export default Index;
