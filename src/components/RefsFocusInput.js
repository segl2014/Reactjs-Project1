import React, { Component } from 'react'
import RefsInput from './RefsInput'

class RefsFocusInput extends Component {

    constructor(props) {
      super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <div>Refs FocusInput</div>
        <RefsInput ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefsFocusInput