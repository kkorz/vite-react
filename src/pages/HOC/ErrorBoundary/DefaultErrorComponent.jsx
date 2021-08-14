import React, { Component } from "react";

class Index extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <p>哟嚯，组件出错啦~</p>;
    }
    return children;
  }
}

export default Index;
