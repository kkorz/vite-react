import React from "react";
import NotFound from "../assets/img/404.jpg";

const Index = () => {
  return (
    <img
      src={NotFound}
      alt=""
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default Index;
