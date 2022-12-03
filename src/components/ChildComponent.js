import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <div>Child Component</div>

        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* onClick handler into an arrow function */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>

        </div>
    </div>

  )
}

export default ChildComponent