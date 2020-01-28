// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
    //solution told me where to put the handlers
    handleInputPassword = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input 
                    type="password"
                    onKeyUp={this.handleInputPassword} 
                />
            </div>
        )
    }
}