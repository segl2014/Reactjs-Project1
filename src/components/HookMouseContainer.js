import React,{useState} from 'react'  //1. import useState
import HookMouse from './HookMouse'

function HookMouseContainer() {
   
    //2. The variable name is display the setter is set display and initial value is true
    const [display, setDisplay] = useState(true)
  return (
    <div>
         <div>Hook Mouse Container</div>

         {/* 3. add a button to toggle this display variable between true and false */}
         {/* 4. button toggle display on click we call set display passing in not off display so we are toggling the display value  */}
         {/* if dispaly variable is set to true we render the hook mask component  */}
         <button onClick={() => setDisplay(!display)}> Toggle display </button>
         {display && <HookMouse/>}
    </div>
  )
}

export default HookMouseContainer