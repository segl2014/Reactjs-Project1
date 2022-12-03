import React, { useState, useEffect } from 'react'

function HookUseEffectFunctionConditionally() {

    const [count, setCount] = useState(0)

    //1. Creating a new state variable for the name input element 
    const [name, setName] = useState('')


    useEffect(() => {
        console.log('useEffect - Updating Document Title')
        document.title = `You clicked ${count} times`
    }, [count])      // useEffect the second parameter is the array of values that the effect depends on it if the values don't change between renders the effect is simply not run

    return (
        <div>
            <div>Hook UseEffect Function Conditionally</div>

            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}> Click {count}</button>

        </div>
    )
}

export default HookUseEffectFunctionConditionally