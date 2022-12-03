import React, { Component } from 'react'

class RenderUser extends Component {
  render() {
    return (
      <div>
         <div>Render User</div>
         <div>
            {/* Step 1 */}
            {/* {this.props.name} */}  

            {/* Step 2 */}
            {/* {this.props.name(false)} */}

            {this.props.render(false)}
         </div>
      </div>
    )
  }
}

export default RenderUser