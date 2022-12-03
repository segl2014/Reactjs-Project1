import React, { Component } from 'react'
// import UpdatedComponent from './HigherOrderWithCounter'
import UpdatedComponent from './HigherOrderWithCounter'

class HigherOrderClickCounter extends Component {

  render() {
    // const {count} = this.state
    const {count, incrementcount} = this.props
    return (
      <div>
        <div>HigherOrderClickCounter</div>
        {/* <button onClick={this.incrementcount}> {this.props.name}Clicked {count} times</button> */}
       
            {/* Part 2 */}
        {/* <button onClick={incrementcount}>
             Clicked {count} times
             </button> */}

            {/* Part 3 */}
            <button onClick={incrementcount}>
            {this.props.name} Clicked {count} times
            </button>
      </div>

    )
  }
}

// export default UpdatedComponent (HigherOrderClickCounter)
export default UpdatedComponent (HigherOrderClickCounter, 5)