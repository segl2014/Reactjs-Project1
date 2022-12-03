import React, { useState } from 'react'  //1. import state from react

function HookUsestateWithObject() {

    // 2. the default value will be an object the object will contain firstName and lastName initialize to an empty string
    // state variable can be a string a number boolean an object or event an array you can use any types based on your requirement
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <div>Hook Usestate With Object</div>
            <form>
                {/*3. let's handle the value attribute and the onChange event on the two input fields for firstName value is going to be equal to name.firstName and onChange that is whenever the user starts typing in something we want to set the firstName property
                    So event our function call set name which is the setter function for the name state variable and what do we want to set firstName equal to event.target.value */}
                
                <h4> Your Firstname is - {name.firstName}</h4>
                <input
                    type="text"
                    value={name.firstName}

                    //5. we can use the spread operator to handle the manual merge - the arrow function we first spread name and then set the appropriate property spread the name then overwrite last name
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />

                
                <h4> Your lastName is -  {name.lastName} </h4>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />

               {/*4. because useState does not automatically merge and update the object this is a key difference to set state which come across in class components */}
               {/* <h4> {JSON.stringify(name)}</h4> */} 
            </form>
        </div>
    )
}

export default HookUsestateWithObject