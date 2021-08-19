import React, { useState } from "react";
import { Button, Space, Divider } from "antd";
import { useDebounceFn } from "@/core/hooks/useDebounceFn";

const Index = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const { run, cancel } = useDebounceFn(() => setResult(result + 1), 1500);

  return (
    <div>
      <h2>防抖(debounce)</h2>
      <h2>
        触发高频事件后 n 秒内函数只会执行一次，如果
        n秒内高频事件再次被触发，则重新计算时间
      </h2>
      <Divider />
      <h3>以下为测试效果, 统计防抖前后按钮触发次数</h3>
      <p>
        防抖前：
        <span style={{ color: "red", fontSize: 20 }}>{count}</span>
        &nbsp;&nbsp;&nbsp;&nbsp; 防抖后：
        <span style={{ color: "green", fontSize: 20 }}>{result}</span>
      </p>
      <Space>
        <Button
          onClick={() => {
            setCount(() => count + 1);
            run();
          }}
          type="primary"
        >
          疯狂点我
        </Button>
        <Button onClick={cancel} type="danger">
          中断防抖
        </Button>
      </Space>
    </div>
  );
};

export default Index;
