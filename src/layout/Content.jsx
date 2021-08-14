import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import config from "../config";

const { Content } = Layout;

const genRouteMap = (config) => {
  return config.reduce((res, item) => {
    return item.children
      ? [...res, ...genRouteMap(item.children)]
      : [
          ...res,
          <Route
            path={item.path}
            key={item.path}
            component={item.component}
            exact
          />,
        ];
  }, []);
};

const Index = () => {
  const routeMap = genRouteMap(config);

  return (
    <Content
      style={{
        margin: 16,
        padding: 16,
        background: "#fff",
        overflow: "scroll",
      }}
    >
      <Switch>
        {routeMap}
        <Redirect from="/" to="/welcome" exact />
        <Redirect to="/404" />
      </Switch>
    </Content>
  );
};

export default Index;
