import React from 'react'

function ErrorBoundary({heroName}) {
    if(heroName === 'Ankita'){
        throw new Error('Not a hero!')
    }
  return (
    <div>
         <div>Error Boundary</div>
         {heroName}
    </div>
  )
}

export default ErrorBoundary