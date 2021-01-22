import React from 'react'
import { Link } from 'react-router-dom'
import { Container, NavLink, Title } from './styles'

const Navbar = () => {
  
  return (
  <Container>
    {localStorage.getItem('token') ? 
    <> 
      <Title>The Marketplace</Title>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/cart">My Cart</NavLink>
      <NavLink to="/account">My Account</NavLink>
      <NavLink to="/" onClick={() => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        window.location.reload()}}>Sign Out</NavLink>
    </>
    :
    <>
      <Link to="/">Log In</Link>
    </>
    }
  </Container>
)}


export default Navbar
