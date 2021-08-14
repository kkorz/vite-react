import React, { useState, useImperativeHandle } from "react";

const ChildRef = (props) => {
  const { childRef } = props;
  const [count, setCount] = useState(0);

  useImperativeHandle(childRef, () => ({
    addCount: (step) => setCount(count + step),
  }));

  return <div>计数器：{count}</div>;
};

export default ChildRef;
