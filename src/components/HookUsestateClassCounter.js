import React, { Component } from 'react'

class HookUsestateClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {          //1. Create a state variable called count and initialize it to zero
         count : 0
      }
    }

    incrementCount = () => {  //2. Create a method increment count which which increment the count value by one
           this.setState({
           count: this.state.count + 1         
           })
    } 
    
  render() {
    return (
      <div>
        <div>Hook Usestate ClassCounter</div>

        {/* 3. button on click of that button call the increment count method and for the inner text we display the count value count is going to be this.state.count */}
        <button onClick={this.incrementCount}>Count {this.state.count}</button>

      </div>
    )
  }
}

export default HookUsestateClassCounter