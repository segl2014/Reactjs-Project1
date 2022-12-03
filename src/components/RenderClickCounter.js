import React, { Component } from 'react'

class RenderClickCounter extends Component {

    // Step 1
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }
  render() {
    // const {count} = this.state

    // step2
    const {count, incrementCount} = this.props
    return (
      <div>
         <div>Render ClickCounter</div>
         {/* <button onClick={this.incrementCount}>Clicked {count} time</button> */}

         {/* step 2 */}
         <button onClick={incrementCount}>Clicked {count} time</button> 
      </div>
    )
  }
}

export default RenderClickCounter