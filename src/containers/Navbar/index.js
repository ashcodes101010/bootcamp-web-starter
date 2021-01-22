import React from 'react'
import { Link } from 'react-router-dom'
import { Container, NavLink } from './styles'

const Navbar = () => {
  
  // const isLoggedIn = 


  return (
  <Container>
    {/* {isLoggedIn 
    ? 
    <> */}
      <Link to="/home">Home</Link>
      <Link to="/cart">My Cart</Link>
      <Link to="/account">My Account</Link>
      <Link to="/">Sign Out</Link>
    {/* </>
    :
    <>
      <Link to="/login">Log In</Link>
    </>
    } */}
  </Container>
)}


export default Navbar
