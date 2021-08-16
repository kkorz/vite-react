import React from "react";
import DefaultErrorComponent from "./DefaultErrorComponent";

const ErrorBoundary = (Boundary = DefaultErrorComponent) => {
  return (WrapperComponent) => (props) => {
    return (
      <Boundary>
        <WrapperComponent {...props} />
      </Boundary>
    );
  };
};

export default ErrorBoundary;
