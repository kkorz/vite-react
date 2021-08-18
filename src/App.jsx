import React from "react";
import { Provider } from "mobx-react";
import * as store from "./store";
import Layout from "./layout";
import "antd/dist/antd.less";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
