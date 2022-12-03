import React from 'react'

const FunctionBodyDestructuring = props => {
    const {name,heroName} = props
    return (
        <div>
            <div>structure it in the Function Body </div>

            <h5> Hello {name} a.k.a {heroName} </h5>
        </div>
    )
}

export default FunctionBodyDestructuring