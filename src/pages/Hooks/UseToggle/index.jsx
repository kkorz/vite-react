import React from "react";
import { Button } from "antd";
import { useToggle } from "@/core/hooks/useToggle";
import classNames from "classnames";
import styles from "./index.module.less";

const Index = () => {
  const [toggled, { setToggle, setOnToggle, setUnToggle }] = useToggle();
  return (
    <div className={styles["toggle-wrapper"]}>
      <section className={styles["toggle-btns"]}>
        <Button onClick={() => setToggle()} type="primary">
          toggle it
        </Button>
        <Button onClick={() => setToggle(true)} type="primary">
          toggle true
        </Button>
        <Button onClick={() => setToggle(false)} type="primary">
          toggle false
        </Button>
        <Button onClick={() => setOnToggle()} type="primary">
          toggle true function
        </Button>
        <Button onClick={() => setUnToggle()} type="primary">
          toggle false function
        </Button>
      </section>

      <div
        className={classNames(
          styles["toggle-status"],
          toggled
            ? styles["toggle-status-true"]
            : styles["toggle-status-false"],
        )}
      >
        {String(toggled)}
      </div>
    </div>
  );
};

export default Index;
