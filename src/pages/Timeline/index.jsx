import React from "react";
import Timeline from "./Timeline";
import { ClockCircleOutlined } from "@ant-design/icons";

const Index = () => {
  return (
    <Timeline>
      <Timeline.Item label={"2021-12-12"} color={"red"}>
        <div>今天吃了吗</div>
      </Timeline.Item>
      <Timeline.Item label={"2021-12-12 20:33:34"} position={"right"}>
        <div>今天吃了今天吃了吗今天吃了吗吗</div>
      </Timeline.Item>
      <Timeline.Item
        label={"2021-12-12 20:33:3433:"}
        dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
      >
        <div>今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗</div>
      </Timeline.Item>
      <Timeline.Item label={"2021-12-12 20:33:3433:"}>
        <div>今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗</div>
      </Timeline.Item>
      <Timeline.Item
        label={"2021-12-12 20:33:343320:33:3420:33:3420:33:3420:33:34:"}
      >
        <div>今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗</div>
      </Timeline.Item>
      <Timeline.Item label={"2021-12-12 20:33:3433:"}>
        <div>
          今天吃了今天吃了吗今天吃了吗吗今今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗今天吃了今天吃了吗今天吃了吗吗天吃了今天吃了吗今天吃了吗吗
        </div>
      </Timeline.Item>
    </Timeline>
  );
};

export default Index;
