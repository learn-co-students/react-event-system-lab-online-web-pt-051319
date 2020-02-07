import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  handleOnFocus = () => console.log('Good!')
  handleOnBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <div>
        <button  
          onFocus = {this.handleOnFocus}
          onBlur = {this.handleOnBlur}
          > Push Me 
          </button>
        
      </div>


    )
  }
}

//     handleKeyUpEvent = () => console.log('Entering password...')
  
//   render() {
//     return (
//       <div>
//           <input 
//             type="password" 
//             onKeyUp= {this.handleKeyUpEvent}
//           />
//       </div>
//     )
//   }
// }
