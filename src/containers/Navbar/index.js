import React from 'react'
import { Container, NavLink, Title, LoginContainer, LeftContainer } from './styles'

const Navbar = () => {
  
  return (
  <Container>
    {localStorage.getItem('token') ? 
    <> 
      <LeftContainer>
        <Title>The Marketplace</Title>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/cart">My Cart</NavLink>
        <NavLink to="/account">My Account</NavLink>
      </LeftContainer>
      <LoginContainer>
        <NavLink to="/" onClick={() => {
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          window.location.reload()}}>Sign Out</NavLink>
      </LoginContainer>
    </>
    :
    <>
      <Title>The Marketplace</Title>
      <LoginContainer>
        <NavLink to="/">Log In</NavLink>
      </LoginContainer>
    </>
    }
  </Container>
)}


export default Navbar
