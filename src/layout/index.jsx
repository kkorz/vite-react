import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import Menu from "./Menu";
import Header from "./Header";
import Content from "./Content";
import "./index.less";

export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Menu />

        <Layout style={{ height: "100vh" }}>
          <Header />
          <Content />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
