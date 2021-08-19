import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Menu, Layout } from "antd";
import * as Icon from "@ant-design/icons";
import config from "../config";
import styles from "./index.module.less";

const { Sider } = Layout;

const genIcon = (icon) => {
  const _icon = icon ? Icon[icon] : Icon["AppstoreAddOutlined"];
  return React.createElement(_icon, {
    style: { fontSize: "16px" },
  });
};

const genOpenKeys = (str) => {
  const arr = str.split("/");
  return arr.reduce((res, item, index) => {
    return index > 0 ? [...res, arr.slice(0, index + 1).join("/")] : [...res];
  }, []);
};

const Index = (props) => {
  const { collapseStatus, setPathname } = props.layout;
  const openKeys = genOpenKeys(location.pathname);
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  const handleClick = (e) => {
    setSelectedKeys(e.key);
  };

  const genMenu = (config) => {
    return config.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu
            key={item.path}
            title={item.text}
            icon={genIcon(item.icon)}
          >
            {genMenu(item.children)}
          </Menu.SubMenu>
        );
      }

      return (
        !item.routeOnly && (
          <Menu.Item key={item.path} icon={genIcon(item.icon)}>
            <Route>
              <Link to={item.path} onClick={() => setPathname(item.path)}>
                {item.text}
              </Link>
            </Route>
          </Menu.Item>
        )
      );
    });
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapseStatus}
      width="250px"
      style={{
        overflow: "auto",
        height: "100vh",
      }}
    >
      <div className={styles.logo}>Vite React</div>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        mode="inline"
        theme="dark"
        style={{ width: "100%" }}
      >
        {genMenu(config)}
      </Menu>
    </Sider>
  );
};

export default inject("layout")(observer(Index));
