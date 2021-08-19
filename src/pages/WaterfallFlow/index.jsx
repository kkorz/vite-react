import React from "react";
import classNames from "classnames";
import styles from "./index.module.less";

const Index = () => {
  const Items = [
    {
      title: "1",
      height: "140px",
    },
    {
      title: "2",
      height: "190px",
    },
    {
      title: "3",
      height: "150px",
    },
    {
      title: "4",
      height: "180px",
    },
    {
      title: "5",
      height: "100px",
    },
    {
      title: "6",
      height: "150px",
    },
    {
      title: "7",
      height: "140px",
    },
    {
      title: "8",
      height: "100px",
    },
    {
      title: "9",
      height: "140px",
    },
    {
      title: "10",
      height: "150px",
    },
    {
      title: "11",
      height: "180px",
    },
    {
      title: "12",
      height: "180px",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <section className={styles["container-3"]}>
        <p>三列瀑布流展示</p>
        <div className={styles["container"]}>
          {Items.map((item, index) => (
            <div
              className={styles["item"]}
              style={{ height: item.height }}
              key={index}
            >
              {item.title}
            </div>
          ))}
        </div>
      </section>

      <section className={styles["container-4"]}>
        <p>四列瀑布流展示</p>
        <div className={styles["container"]}>
          {Items.map((item, index) => (
            <div
              className={styles["item"]}
              style={{ height: item.height }}
              key={index}
            >
              {item.title}
            </div>
          ))}
          <span className={classNames(styles["item"], styles["break"])} />
          <span className={classNames(styles["item"], styles["break"])} />
          <span className={classNames(styles["item"], styles["break"])} />
        </div>
      </section>
    </div>
  );
};

export default Index;
