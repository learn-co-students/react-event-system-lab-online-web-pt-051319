import React, { Component } from "react";

export default class KeyPad extends Component {
  keyUpHandler = () => console.log("Enter password...");

  render() {
    return (
      <div>
        <input onKeyUp={this.keyUpHandler} type="password" />
      </div>
    );
  }
}
