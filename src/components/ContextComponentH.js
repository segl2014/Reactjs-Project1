import React, { useContext } from 'react'           //4.1 import useContext from react 
import ContextComponentI from './ContextComponentI'
import { UserContext, ChannelContext } from '../App'       //4.2 import the necesarry context

function ContextComponentH() {

    //4.3 called the UseContext function passing in context as its argument
    const user = useContext(UserContext)                // return the context value
    const channel = useContext(ChannelContext)

  return (
    <div>
        <div>Context ComponentH</div>
        {/* 1.4
        4. use to the context hook  */}
        {user} - {channel}
        
        <ContextComponentI/>
    </div>
  )
}

export default ContextComponentH