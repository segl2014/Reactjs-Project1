import React, { useState, useEffect } from 'react'      //1. Import useState, useEffect  

function HookMouse() {

    //2. Create two state variables for X&Y initialized to 0
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    //6. let's define log mouse position it is going to accept event as it argument and within body 
    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    //4. useEffect accepts a function as an argument within the function
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)// we add the event listener 
        //5. The event handler is log mouse position

        return () => {
            //8. let's log a statement component unmounting code and we remove the event listener mouse move and log mouse position
            console.log('Component unmounting code')

            window.removeEventListener('mousemove', logMousePosition)
            //7. this arrow function passed to use effect we return another cleanup function return a function
        }
    }, [])   // simply specifying empty array as the second parameter to use effect  
    //6. the effect is called after every render unless you specify the dependency array
    return (
        <div>
            <div>HookMouse</div>

            {/* 3. I will render these state variables helps the x coordinate and y coordinate */}
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse