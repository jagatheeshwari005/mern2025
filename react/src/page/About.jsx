import React from 'react'

const About = ({items,users}) => {
  return (
    <div>About
      <ol>
        {items.map((f)=>(<li>{f}</li>))}
      </ol>
      <h1>
        {users.username}
      </h1>
        <h1>
        {users.userpassword}
      </h1>
    </div>
  )
}

export default About