import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>

      <Link to ='/State'>UseState</Link>
      <Link to ='/Effect'>UseEffect</Link>
      <Link to ='/Effect2'>UseEffect2</Link>
    </div>
  )
}
export default Hooks