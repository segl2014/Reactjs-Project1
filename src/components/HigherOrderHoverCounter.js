import React, { Component } from 'react'
//import UpdatedComponent from './HigherOrderWithCounter'
import HigherOrderWithCounter from './HigherOrderWithCounter'

class HigherOrderHoverCounter extends Component {

   render() {
   // const {count} = this.state
   const {count, incrementcount} = this.props
    return (
      <div>
         <div>HigherOrderHoverCounter</div>
         {/* <h3 onMouseOver={this.incrementcount}>{this.props.name} Hovered {count} times</h3> */}
         <h3 onMouseOver={incrementcount}> Hovered {count} times</h3>
      </div>
    )
  }
}

// Part 1
//export default UpdatedComponent (HigherOrderHoverCounter)

// Part 2
//export default HigherOrderWithCounter (HigherOrderHoverCounter)

// Part 3
export default HigherOrderWithCounter (HigherOrderHoverCounter, 10)

