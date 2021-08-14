import React, { useState } from "react";
import useUrlLoader from "./useUrlLoader";

const Index = () => {
  const [count, setCount] = useState(0);
  const [loading, data] = useUrlLoader(
    "https://dog.ceo/api/breeds/image/random",
    [count]
  );

  return (
    <div>
      <h1>点击了{count}次</h1>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
      <div>
        {loading ? <p>狗狗正在制造中</p> : <img src={data?.message} alt="" />}
      </div>
    </div>
  );
};

export default Index;
