import React, { useState } from 'react'

function HookUsestateWithPreviousstate() {

    //1. state hook to create a state variable and the corresponding setter function the count,setCount is equal to state with a default value of initial count 
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
        <div> Hook Usestate With Previous state </div>

        {/*2. count is going to be count itself then we add the three buttons to reset increment and decrement the count value */}
        count: {count}

        <button onClick={() => setCount(initialCount)}> Reset </button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}> Decrement </button>
        <button onClick={incrementFive}> Increment 5</button>


    </div>
  )
}

export default HookUsestateWithPreviousstate