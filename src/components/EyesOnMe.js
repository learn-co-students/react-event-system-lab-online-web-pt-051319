// Code EyesOnMe Component Here
import React from "react";

export default class EyesOnMe extends React.Component {
  focusedEvent = () => {
    console.log("Good!");
  };

  blurredEvent = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onFocus={this.focusedEvent} onBlur={this.blurredEvent}></button>
    );
  }
}
