import React, { useReducer } from 'react'  //3. import useReducer from react

//5.
const initialState = {
    firstCounter: 0,

    //10
    secondCounter: 10

}

// the reducer function accepts two values and return one value the two values accepted are the current 
const reducer = (state, action) => {    //6. the two values accepted are the current state and the action 
    //return newState         // return newState

    //7. the reducer function body we are going to add a switch statement the switch expression is the action itself
    switch (action.type) {
        case 'increment':
            //return {firstCounter: state.firstCounter + 1}

            //9
            return { ...state, firstCounter: state.firstCounter + action.value }

        case 'decrement':
            //return {firstCounter: state.firstCounter - 1} 
            return { ...state, firstCounter: state.firstCounter - action.value }

        case 'increment2':
            //return {secondCounter: state.secondCounter + 1}

            //9
            return { ...state, secondCounter: state.secondCounter + action.value }

        case 'decrement2':
            //return {firstCounter: state.secondCounter - 1} 
            return { ...state, secondCounter: state.secondCounter - action.value }


        case 'reset':
            return initialState
        default:
            return state
    }
}

//1. create function component
function UseReducerCounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState) //4. the first one is a reducer function and the second one is the initial state 
    return (
        <div>

            {/* 2. create three button */}
            <div>UseReducer CounterOne</div>
            <div>Count - {count.firstCounter}</div>
            <div>Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}> Increment </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}> Decrement </button>

            {/* 8 */}
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}> Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}> Decrement 5</button>

            {/* 8 */}
            <button onClick={() => dispatch({ type: 'increment', value: 2 })}> Increment 2</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 2 })}> Decrement 2</button>

            <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
        </div>
    )
}

export default UseReducerCounterTwo