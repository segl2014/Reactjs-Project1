import React from 'react'
import './myStyle.css'

function Stylesheet(props) {            // Conditionally apply a class based on props or state of the component
    let className = props.primary ? 'primary' : ''
    return (
    <div>
        {/* <h1 className='primary'>Style sheet Component</h1> */}

        {/* <h1 className={className}>Style sheet Component</h1> */}

        {/* The Component we change the value of the class name attribute to a template literalus using backticks  */}
        <h1 className={`$ {className} font-xl` }>Style sheet Component</h1>
    </div>
    
  )
}

export default Stylesheet