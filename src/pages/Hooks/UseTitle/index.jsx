import React, { useRef, useState } from "react";
import { Button } from "antd";
import { useTitle } from "./useTitle";

const Index = () => {
  const inputRef = useRef();
  const [title, setTitle] = useState("初始title");
  useTitle(title);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <Button onClick={() => setTitle(inputRef.current.value)} type={"primary"}>
        点我设置title
      </Button>
    </div>
  );
};

export default Index;
