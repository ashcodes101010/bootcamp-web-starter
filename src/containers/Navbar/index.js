import React from 'react'
import { Link } from 'react-router-dom'
import { Container, NavLink } from './styles'

const Navbar = () => {
  
  return (
  <Container>
    {localStorage.getItem('token') ? 
    <> 
      <p>Marketplace</p>
      <Link to="/home">Home</Link>
      <Link to="/cart">My Cart</Link>
      <Link to="/account">My Account</Link>
      <Link to="/" onClick={() => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        window.location.reload()}}>Sign Out</Link>
    </>
    :
    <>
      <Link to="/">Log In</Link>
    </>
    }
  </Container>
)}


export default Navbar
