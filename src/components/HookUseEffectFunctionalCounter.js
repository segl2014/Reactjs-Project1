import React, { useState, useEffect } from 'react'     //1. import the useState to implement the counter  

function HookUseEffectFunctionalCounter() {

  //2. Create a state variable and corresponding set up function
  const [count, setCount] = useState(0)

  //3. let's pass in an arrow function which updates the documents title you clicked doller count times and that is pretty much
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  
  return (
    <div>
      <div>Hook UseEffect Functional Counter</div>

      {/* add a button with a click handler to increment the count */}
      <button onClick={() => setCount(count + 1)}> Click {count} times </button>
    </div>
  )
}

export default HookUseEffectFunctionalCounter

