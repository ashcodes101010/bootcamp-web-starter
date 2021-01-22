import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 50px;
  width: 100vw;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`

export const NavLink = styled(link).attrs(() => ({
  activeStyle: {
    color: 'black'
  },
  exact: true,
}))`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: black;
  margin: 0 20px;
  text-decoration: none;
`
export const Title = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #0E7695;
  margin: 0 20px;
  text-decoration: none;
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`