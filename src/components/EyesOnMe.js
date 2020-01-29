// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  whenFocused = () => {
    console.log("Good!")
  }

  whenBlurred = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (<button onFocus={this.whenFocused} onBlur={this.whenBlurred} >Enter</button>)
  }

}