import React from 'react'

function List({name, completed, id}) {
  return (
    <div>
        <li>
            <p>{name}</p>
        </li>
    </div>
  )
}

export default List
