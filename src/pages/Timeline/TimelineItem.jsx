import React from "react";
import "./index.css";

const TimelineItem = (props) => {
  const {
    children,
    label,
    dot,
    color = "cornflowerblue",
    position = "left",
  } = props;

  return (
    <div className={"flex-base"}>
      <div className={"label"}>{position === "left" ? label : children}</div>
      <div className={"dot-wrapper"}>
        {dot ? dot : <span className={"dots"} style={{ borderColor: color }} />}
      </div>
      <div className={"content"}>{position === "left" ? children : label}</div>
    </div>
  );
};

export default TimelineItem;
