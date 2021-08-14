import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Index = () => {
  const [errObj, setErrObj] = useState({ name: "kang" });
  return (
    <div>
      <h1>{errObj.name}</h1>
      <button onClick={() => setErrObj(null)}>点我抛错</button>
    </div>
  );
};

export default ErrorBoundary()(Index);
