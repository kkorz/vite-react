import React, { useState, useImperativeHandle } from "react";

const ChildRef = (props) => {
  const { childRef } = props;
  const [count, setCount] = useState(0);

  useImperativeHandle(childRef, () => ({
    addCount: (step) => setCount(count + step),
  }));

  return (
    <div style={{ fontSize: 20 }}>
      计数器：<span style={{ color: "green" }}>{count}</span>
    </div>
  );
};

export default ChildRef;
