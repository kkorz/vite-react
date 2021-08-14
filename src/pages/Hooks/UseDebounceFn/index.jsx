import React, { useState } from "react";
import { useDebounceFn } from "./useDebounceFn";

const Index = () => {
  const [count, setCount] = useState(0);
  const { run } = useDebounceFn(() => setCount(count + 1), 2000);

  return (
    <div>
      <h2>
        防抖(debounce)：触发高频事件后 n 秒内函数只会执行一次，如果 n
        秒内高频事件再次被触发，则重新计算时间
      </h2>
      <h3>useDebounceFn Test</h3>
      <p>
        没想到吧 我现在是
        <span style={{ color: "red", fontSize: 18 }}>{count}</span>
      </p>
      <button onClick={run}>疯狂点我 please~</button>
    </div>
  );
};

export default Index;
