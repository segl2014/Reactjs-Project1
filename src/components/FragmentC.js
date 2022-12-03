import React from 'react'

function FragmentC() {
    const items = []
  return (
    <React.Fragment>
         <div>Fragment C</div>
         {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <h4>Title</h4>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
         }
         <td>Name</td>
         <td>vishwas</td>
    </React.Fragment>
  )
}

export default FragmentC