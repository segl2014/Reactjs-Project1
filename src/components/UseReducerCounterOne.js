import React,{useReducer} from 'react'  //3. import useReducer from react

//5.
 const initialState = 0

 // the reducer function accepts two values and return one value the two values accepted are the current 
 const reducer = (state, action) => {    //6. the two values accepted are the current state and the action 
    //return newState         // return newState

    //7. the reducer function body we are going to add a switch statement the switch expression is the action itself
    switch(action){
        case 'increment':
            return state + 1

        case 'decrement':
            return state - 1    

        case 'reset':
            return initialState
        default: 
            return state    
        }
}

//1. create function component
function UseReducerCounterOne() {

    const [count,dispatch] = useReducer(reducer, initialState) //4. the first one is a reducer function and the second one is the initial state 
  return (
    <div>

        {/* 2. create three button */}
         <div>UseReducer CounterOne</div>
         <div>Count - {count}</div>
         <button onClick={() => dispatch('increment')}> Increment </button>
         <button onClick={() => dispatch('decrement')}> Decrement </button>
         <button onClick={() => dispatch('reset')}> Reset </button>
    </div>
  )
}

export default UseReducerCounterOne