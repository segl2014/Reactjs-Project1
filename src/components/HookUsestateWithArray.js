import React, { useState } from 'react'    //1. import useState

function HookUsestateWithArray() {

    //2. destructure items and set items from useStateand since working with arrays
    const [items, setItems] = useState([])

    //6. let's define the add item function const item is equal an arrow function and within the function
    const addItem = () => {

        //7. we call the set items setter function we need to pass in the value to set for the items array
        // we spread the items array and then we push a new object for the new object ID is going to be items.length and the value is going rendom number between 1 and 10
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
            // 8. whenever add item is called we make a copy of all the items in the array using spread operator to that list of copied items we simply append another object
            // that we are not overwriting the original array on first iteration an empty array 
        }])
    }

    return (
        <div>
            <div>Hook Usestate With Array</div>

            {/* 4. button at the top which pushes new items into the array  */}
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    //3. we are dealing with an array of objects
                    items.map(item => <li key={item.id}> {item.value} </li>)
                    // 5. onClick we are going to call a dunction add item
                }
            </ul>
        </div>
    )
}

export default HookUsestateWithArray