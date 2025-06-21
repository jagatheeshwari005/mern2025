import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>

      <h3><Link to ='/State'>UseState</Link></h3>
      <h3><Link to ='/Effect'>UseEffect</Link></h3>
      <h3><Link to ='/Effect2'>UseEffect2</Link></h3>
      <h3><Link to ='/Ref'>Ref</Link></h3>
     <h3> <Link to ='/Reducer'>Reducer</Link></h3>
    </div>
  )
}
export default Hooks