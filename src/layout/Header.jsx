import React from "react";
import { observer, inject } from "mobx-react";
import { Layout, Breadcrumb } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import config from "../config";
import "./index.less";

const { Header } = Layout;

const flatTree = (data) => {
  return data.reduce((res, item) => {
    if (item.children) {
      const { children, ...restItem } = item;
      return [...res, restItem, ...flatTree(item.children)];
    }
    return [...res, item];
  }, []);
};

const genBreadcrumb = (data, currentPath) => {
  const pathSnippets = currentPath.split("/").filter((item) => item);
  const flatedTree = flatTree(data);

  let len = 1;
  const breadcrumbList = [];
  while (len <= pathSnippets.length) {
    const path = "/" + pathSnippets.slice(0, len).join("/");
    breadcrumbList.push(flatedTree.find((item) => item.path === path) || "");
    len++;
  }

  return breadcrumbList;
};

const Index = (props) => {
  const { collapseStatus, setCollapseStatus, pathname } = props.layout;

  const toggle = () => {
    setCollapseStatus(!collapseStatus);
  };

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      {React.createElement(
        collapseStatus ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: toggle,
        }
      )}
      <Breadcrumb separator=">">
        {genBreadcrumb(config, pathname).map((item, index) => (
          <Breadcrumb.Item key={index}>{item.text}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div style={{ flex: "1", textAlign: "center" }}>宠辱不惊，泰然自若</div>
    </Header>
  );
};

export default inject("layout")(observer(Index));
