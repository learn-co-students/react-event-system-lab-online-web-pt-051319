// Code EyesOnMe Component Here
// Code Keypad Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    constructor(props) {
        super()
        this.state = {
        }
    }

    focuser() {
        console.log('Good!')
    }

    blurred() {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focuser} onBlur={this.blurred}></button>
        )
    }

}