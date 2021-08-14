import React, { useState } from "react";
import { useThrottleFn } from "./useThrottleFn";

const Index = () => {
  const [count, setCount] = useState(0);
  const { run } = useThrottleFn(() => setCount(count + 1), 2000);

  return (
    <div>
      <h2>
        节流(throttle)：高频事件触发，但在 n
        秒内只会执行一次，所以节流会稀释函数的执行频率
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
