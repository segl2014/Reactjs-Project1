import React, { Component } from 'react'

class RefsInput extends Component {

    constructor(props) {
      super(props)
      this.inputRefs = React.createRef()
    }

    foucsInput(){
        this.inputRefs.current.focus()
    }
  render() {
    return (
      <div>
         <div>Refs Input</div>
         <input type="text" ref={this.inputRefs}/>
      </div>
    )
  }
}

export default RefsInput