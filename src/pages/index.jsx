import React from "react";

const Index = () => {
  const textStyle = {
    fontSize: "40px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <p style={textStyle}>Yoo Welcome !</p>
    </div>
  );
};

export default Index;
