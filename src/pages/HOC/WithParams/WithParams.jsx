import React, { useState, useEffect } from "react";

const WithParams = (WrapperComponent) => {
  return (props) => {
    const { location } = props;
    const [params, setParams] = useState("");

    useEffect(() => {
      setParams(location.search);
    }, [location]);

    return <WrapperComponent {...props} params={params} />;
  };
};

export default WithParams;
