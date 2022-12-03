import React,{useContext} from 'react'
import { CountContext } from '../App'

function UseContextComponentF() {
    const countContext = useContext(CountContext)
  return (
    <div>
        {/* Add the count value */}
         <div>UseContextComponentF - {countContext.countState}</div>    
        
         <button onClick={() => countContext.countDispatch('increment')}> Increment </button>
         <button onClick={() => countContext.countDispatch('decrement')}> Decrement </button>
         <button onClick={() => countContext.countDispatch('reset')}> Reset </button> 
    </div>
  )
}

export default UseContextComponentF