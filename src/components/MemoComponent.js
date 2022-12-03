import React from 'react'

function MemoComponent({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
        <div>Memo Component</div>
        {name}
    </div>
  )
}

export default React.memo(MemoComponent)