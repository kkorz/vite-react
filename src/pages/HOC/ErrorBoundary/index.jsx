import React, { useState, useEffect } from "react";
import { Divider, Button } from "antd";
import ErrorBoundary from "@/core/hoc/ErrorBoundary";

const Index = () => {
  const [count, setCount] = useState(0);
  const isDanger = count === 4;

  const addCount = () => {
    setCount(() => count + 1);
  };

  useEffect(() => {
    if (count === 5) {
      throw new Errow("boom");
    }
  }, [count]);

  return (
    <div>
      <h2>错误边界（Error Boundaries）</h2>
      <h3>
        错误边界是一种 React 组件，这种组件
        <strong>
          可以捕获并打印发生在其子组件树任何位置的 JavaScript
          错误，并且，它会渲染出备用 UI
        </strong>
        ，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。
      </h3>
      <h3>
        <i>
          <strong>
            简而言之：错误边界能够在组件内部发生错误的时候，使用componentDidCatch捕获错误，实现UI优雅降级
          </strong>
        </i>
      </h3>
      <Divider />
      <h3>以为为演示内容，组件报错后页面不会白屏</h3>
      <section>
        <h4>
          这是一个计数器，当count为<strong>5</strong>页面会崩溃
        </h4>
        <p>
          计数器：
          <span style={{ fontSize: 20, color: isDanger ? "red" : "green" }}>
            {count}
          </span>
        </p>
        <Button type={isDanger ? "danger" : "primary"} onClick={addCount}>
          {isDanger ? "别点啦，要炸了" : "点我 + 1"}
        </Button>
      </section>
    </div>
  );
};

export default ErrorBoundary()(Index);
