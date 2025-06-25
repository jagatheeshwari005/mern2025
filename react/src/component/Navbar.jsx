import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <> <div>
            <nav className='navbar'>


                <Link to='/' className='Link'>Home</Link>
                <Link to='/about' className='Link'>About</Link>
                <Link to='/skills' className='Link'>Skills</Link>
                <Link to='/contact' className='Link'>Contact</Link>
                <Link to='/child' className='Link'>Child</Link>
                <Link to='/Login' className='Link'>Login</Link>
                <Link to='/Counter' className='Link'>Counter</Link>
                <Link to='/hooks' className='Link'>Hooks</Link>
                <Link to='/todo' className='Link'>Todo</Link>


            </nav>
        </div>
        </>
    )
}

export default Navbar