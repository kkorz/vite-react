import React from "react";
import TimelineItem from "./TimelineItem";

const defaultStyle = {
  width: "500px",
  textAlign: "center",
};

const Timeline = (props) => {
  const { children, style } = props;
  return <div style={{ ...defaultStyle, ...style }}>{children}</div>;
};

Timeline.Item = TimelineItem;

export default Timeline;
