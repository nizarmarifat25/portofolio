import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className='navbar-lg'>
        <h2 className='header-navbar'><span className='word-one'>NIZAR</span> MARIFAT</h2>
        <div className='sidebar-lg'>
          <p>
            <NavLink className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"} to={'/'}>Home</NavLink>
          </p>
          <p>
            <NavLink className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"} to={'/about'}>About</NavLink>
          </p>
          <p>
            <NavLink className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"} to={'/projects'}>Projects</NavLink>
          </p>
          <p>
            <NavLink className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"} to={'/contact'}>Contact</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar