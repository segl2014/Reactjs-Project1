import React from 'react'

const heading = {
    fontSize: '72px',
    color:'green'
}
function Inline() {
  return (
    <div>
         <h4 style={heading}>Inline</h4>

         {/* CSS Module - css module feature is avaliable with react script version2  or higher*/}
         <h1 className="error"> Error </h1>
    </div>
    // In react Inline styles are not specified as string instead they are specified with an object whose key is the camel cased version of the style name and the value is usually a string
    )
}

export default Inline