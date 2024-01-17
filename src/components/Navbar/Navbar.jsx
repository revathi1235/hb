import React from 'react' 
import {useNavigate} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  const navigate=useNavigate()
  const handleClick=(e)=>{
    e.preventDefault()
    navigate('/register')
  }
  return (
    <div className='navbar'>
        <div className='navContainer'>
           <h1> <span className="logo" style={{fontFamily:"cursive"}}>Hotel Booking</span></h1>
            <div className="navItems">
              <button className="navButton" onClick={handleClick}>Register</button>
                <button className="navButton">Login</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar