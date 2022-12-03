import React, { Component } from 'react'
import { UserConsumer } from './ContextUser'

class ContextComponentF extends Component {
  render() {
    return (
      <div>
         <div>
         <div>ContextComponentF</div>  

         {/* Step 3 Consumer the context value */}
         <UserConsumer>
            {
                (username) => {
                   return <div>Hello {username}</div>
                }
            }
         </UserConsumer>
         </div>
      </div>
      
    )
  }
}

export default ContextComponentF