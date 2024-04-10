import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffee">Cafes</NavLink>
      <NavLink to="/coffee-list">Lista de cafes</NavLink>
    </nav>
  )
}

export default NavBar