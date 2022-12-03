import React, { Component } from 'react'

class RenderHoverCounter extends Component {

    // Step 1
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
  
    //   incrementCount = () => {
    //       this.setState(prevState => {
    //           return {count : prevState.count + 1}
    //       })
    //   }
  render() {
    // const {count} = this.state

     // step2
     const {count, incrementCount} = this.props
    return (
      <div>
         <div>Render HoverCounter</div>
         {/* <h4 onMouseOver={this.incrementCount}> Hovered {count} Time</h4> */}
         
         {/* Step 2 */}
         <h4 onMouseOver={incrementCount}> Hovered {count} Time</h4>
      </div>
    )
  }
}

export default RenderHoverCounter