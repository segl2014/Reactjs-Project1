import React, { Component } from 'react'
import ContextComponentE from './ContextComponentE'

class ContextComponentC extends Component {
  render() {
    return (
      <div>
        <div>Context ComponentC</div>
        <ContextComponentE/>
      </div>
    )
  }
}

export default ContextComponentC