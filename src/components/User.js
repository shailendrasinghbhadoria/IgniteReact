import React, { useState } from 'react'

const User = (props) => {

    const [count] = useState(0)

  return (
    <div className='user-card'>
        <p>Count: {count}</p>
        <h2>Name: {props.name}</h2>
        <h3>Location: {props.location}</h3>
        <h4>Contact: @shailendra127</h4>
    </div>
  )
}

export default User;