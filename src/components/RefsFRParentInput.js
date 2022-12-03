import React, { Component } from 'react'
import RefsFRInput from './RefsFRInput'

class RefsFRParentInput extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <RefsFRInput ref={this.inputRef} />
        <button onclick={this.clickHandler}> Focus Input </button>
      </div>
    )
  }
}

export default RefsFRParentInput