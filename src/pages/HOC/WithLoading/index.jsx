import React, { useState } from "react";
import DispalyComponent from "./DispalyComponent";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const fetchRemote = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <DispalyComponent loading={loading} />
      <button onClick={fetchRemote}>点我请求数据</button>
    </>
  );
};

export default Index;
