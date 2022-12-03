import React, {useEffect, useState, someProp} from 'react'   //1. import useState

function HookUsestateFunctionWithIncorrectDependency() {

    //2. create a state variable called count initialized to 0
    const [count, setCount] = useState(0)

    //4. set up our timer and let's start with this tick function
    const tick = () => {
        //setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    //9. handy tip - sometimes yu might want to call a function with a useEffect so function do something
    // function doSomthing (){
    //     console.log(someProp)
    // } 

    //5. basically a function call plus in an arrow function and within this function we set up timer
    useEffect(() => {
        function doSomething(){
            console.log(someProp)
        } 
        doSomething()
        const interval = setInterval(tick, 1000) //6. the tick method every second have this effect is going to fire after every render if we only want the intervel to be set up once on initial render that is compontDidMount equivalent
        return () => {
            clearInterval(interval)
        }
    //8. replicate component will unmount for the cleanup so from useEffect we return a function and within that function we clear the intervel 
    }, [someProp]) //7. we simply paas an empty array as the dependency list and that is second parameter an empty array   

  //3. render this state variable in the browser   
  return (
    <div>
         <div>Hook Usestate Function With Incorrect Dependency</div>
         <div> {count} </div>
    </div>
  )
}

export default HookUsestateFunctionWithIncorrectDependency