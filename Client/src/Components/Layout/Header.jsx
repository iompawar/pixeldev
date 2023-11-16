import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'
import { FaUser } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='Header-comp'>
        <div className="logo-container">
            <Link to="/" className='logo-txt'>PixelDev</Link>
        </div>

        <div className="navlinks-container">
            <NavLink to="/categories" className="navlinks">Categories</NavLink>
            <NavLink to='/contact'  className="navlinks">Contact</NavLink>
            <NavLink to='/about' className="navlinks">About</NavLink>  
        </div>

        <div>
        <Link to="/login-register" className='navlinks text-info'>Login</Link>
        <Link to="/favourite" ><AiTwotoneHeart className='heart-icon-header'/></Link>
        <Link to="/user"><FaUser className='user-icon'/></Link>
        </div>
    </div>
  )
}

export default Header