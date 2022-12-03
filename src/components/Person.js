import React from 'react'

function Person(person, key) {

  return (
    <div>
        <h4>
         {key} I am {person.name}. I am {person.age} year old.I know {person.skill}
        </h4>
    </div>
  )
}

export default Person