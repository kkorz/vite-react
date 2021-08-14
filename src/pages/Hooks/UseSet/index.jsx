import React, { useRef } from "react";
import { useSet } from "./useSet";

const Index = () => {
  const inputRef = useRef();
  const [set, { add, has, remove, reset }] = useSet(["hello"]);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => add(inputRef.current.value)}>添加</button>
      <button onClick={reset}>清空set</button>
      <h2>hello {has("hello") ? "存在" : "不存在"}</h2>
      <div>
        {Array.from(set).map((item, index) => (
          <div key={index}>
            <span>{item}</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => remove(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
