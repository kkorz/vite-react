import React, { useState } from "react";
import { Button, Space, Divider } from "antd";
import { useThrottleFn } from "@/core/hooks/useThrottleFn";

const Index = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const { run, cancel } = useThrottleFn(() => setResult(result + 1), 1500);

  return (
    <div>
      <h2>节流(throttle)</h2>
      <h2>
        高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率
      </h2>
      <Divider />
      <h3>以下为测试效果, 统计节流前后按钮触发次数</h3>
      <p>
        节流前：
        <span style={{ color: "red", fontSize: 20 }}>{count}</span>
        &nbsp;&nbsp;&nbsp;&nbsp; 节流后：
        <span style={{ color: "green", fontSize: 20 }}>{result}</span>
      </p>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setCount(() => count + 1);
            run();
          }}
        >
          疯狂点我
        </Button>
        <Button type="danger" onClick={cancel}>
          中断节流
        </Button>
      </Space>
    </div>
  );
};

export default Index;
