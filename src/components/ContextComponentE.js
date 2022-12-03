import React, { Component } from 'react'
import ContextComponentF from './ContextComponentF'
import UserContext from './ContextUser'

class ContextComponentE extends Component {

    static contextType = UserContext
    
  render() {
    return (
      <div>
        <div>Context ComponentE</div>
        Component E Context {this.context}
        <ContextComponentF/>
      </div>
    )
  }
}

ContextComponentE.contextType = UserContext

export default ContextComponentE