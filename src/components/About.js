import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () =>{
  return (
    <div>
        <h1>About</h1>
        <User name={"Shailendra Bhadoria"} location={"Gwalior"}/>
        <UserClass name={"Chotu Bhadoria"} location={"Morena"} num={1}/>
    </div>
  )
}

export default About