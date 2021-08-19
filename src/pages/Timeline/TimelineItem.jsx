import React from "react";
import styles from "./index.module.less";

const TimelineItem = (props) => {
  const {
    children,
    label,
    dot,
    color = "cornflowerblue",
    position = "left",
  } = props;

  return (
    <div className={styles["flex-base"]}>
      <div className={styles["label"]}>
        {position === "left" ? label : children}
      </div>
      <div className={styles["dot-wrapper"]}>
        {dot ? (
          dot
        ) : (
          <span className={styles["dots"]} style={{ borderColor: color }} />
        )}
      </div>
      <div className={styles["content"]}>
        {position === "left" ? children : label}
      </div>
    </div>
  );
};

export default TimelineItem;
