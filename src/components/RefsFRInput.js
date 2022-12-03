import React from 'react'

// function RefsFRInput() {
//   return (
//     <div>
//          <div>Refs FRInput</div>
//          <input type="text" />
//     </div>
//   )
// }

// Forwarding Refs
const RefsFRInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default RefsFRInput