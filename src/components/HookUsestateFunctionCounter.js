import React,{useState} from 'react'             // importing it from react

function HookUsestateFunctionCounter() {           // 1. function component

    // Hooks are just function so we simply call them
    // useState accept the initial value of the state variable which is 0 and return a pair of values current value of the state variable which we are going to call as count
    // A method that can update the state variable which we are going to call as count and a method that can update the state variable which we going to call as set count 
    const [count, setCount] = useState(0)     // Array destructuring which is a feature in es6 if 
    //2. state variable count initialized to Zero 
    return (
    <div>
        <div>Hook Usestate FunctionCounter</div>
        {/* add a button the button will have an onClick handler and also the count as the inner text */}
        
        {/* count{} is render 
        3. the method (setCount) that is capable of updating the (count) state variable */}
        <button onClick = {() => setCount(count + 1)}> Count{count}</button> 
        {/* onClick we call set count passing in the  new count value and new count value is current count plus one this becomes a function call that's converted into an arrow function */}
    </div>
  )
}

export default HookUsestateFunctionCounter