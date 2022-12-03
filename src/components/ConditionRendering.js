import React, { Component } from 'react'

class ConditionRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

    //4. Short-circuit Operator
    return this.state.isLoggedIn && <div> Welcome vishwase</div>
    //======

    //3. Even more simpler (Ternary conditional operator)
    // return(
    //      this.state.isLoggedIn ?
    //      <div> Welcome Vishwase </div>:
    //      <div> Welcome Guest </div>
    // )

    //======

    //2. The element variable approach
    // let message 
    // if (this.state.isLoggedIn){
    //     message = <div> Welcome vishwase</div>
    // } else {
    //     message = <div> Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //======

    // 1. if-else    
    // if (this.state.isLoggedIn){
    //     return <div> Welcome Vishwase</div>
    // } else {
    //     return <div> Welcome Guest </div> 
    // }

    //============

    // return (
    //   <div>
    //     <div>Condition Rendering</div>
    //     <div>Welcome vishwase</div>
        
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default ConditionRendering