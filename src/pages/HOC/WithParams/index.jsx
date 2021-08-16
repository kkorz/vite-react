import React, { useRef } from "react";
import WithParams from "@/core/hoc/WithParams";
import { Input, Button } from "antd";

const Index = (props) => {
  const { params, history } = props;
  const inputRef = useRef(null);

  const changUrl = () => {
    const val = inputRef.current.state.value;
    if (val) {
      history.push(`/hoc/withParams?name=${val}`);
      return;
    }
    history.push(`/hoc/withParams`);
  };

  return (
    <div>
      <h2>
        URL的params是：
        <span style={{ color: "red" }}>{params}</span>
      </h2>
      <Input ref={inputRef} style={{ width: 200 }} />
      <Button onClick={changUrl}>点我改变url</Button>
    </div>
  );
};

export default WithParams(Index);
