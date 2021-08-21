import React from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "antd";
import Menu from "./Menu";
import Header from "./Header";
import Content from "./Content";

export default () => {
  return (
    <HashRouter>
      <Layout>
        <Menu />

        <Layout style={{ height: "100vh" }}>
          <Header />
          <Content />
        </Layout>
      </Layout>
    </HashRouter>
  );
};
