import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40px;
`

export const NavLink = styled(link).attrs(() => ({
  activeStyle: {
    color: '#00A676'
  },
  exact: true,
}))`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 16px;
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