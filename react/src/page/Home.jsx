import React from 'react'

const Home = ({items,users}) => {
  return (

    <div>
      <ul>
        {items.map((fruits)=>(<li>{fruits}</li>))}
      </ul>
      <h1>{users.username}</h1>
      <h1>{users.password}</h1>
    </div>
  )
}

export default Home