import React from "react";

const WithLoading = (WrapperComponent) => {
  return (props) => {
    const { loading } = props;
    if (loading) {
      return <div>Loading</div>;
    }
    return <WrapperComponent {...props} />;
  };
};

export default WithLoading;
