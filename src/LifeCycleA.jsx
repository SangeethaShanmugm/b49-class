import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "Sangeetha",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    console.log("getDerivedStateFromProps value =>", state.name);
    return state.name;
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <h1>LifeCycleA</h1>
        <h2>My name is {this.state.name}</h2>
        <LifeCycleB />
      </div>
    );
  }
}
