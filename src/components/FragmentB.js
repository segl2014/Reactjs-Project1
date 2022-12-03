import React from 'react'
import FragmentC from './FragmentC'

function FragmentB() {
  return (
    <div>
         <div>Fragment B</div>
         <table>
            <tbody>
                <tr>
                   <FragmentC/>
                </tr>
            </tbody>
         </table>
    </div>

  )
}

export default FragmentB