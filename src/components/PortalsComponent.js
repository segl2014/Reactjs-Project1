import React from 'react'
import { ReactDOM } from 'react'

function PortalsComponent() {
  return ReactDOM.createPortal(
    <div>
         <h4>Portals Component</h4>,
         document.getElementById('Portals-root')
    </div>
  )
}

export default PortalsComponent