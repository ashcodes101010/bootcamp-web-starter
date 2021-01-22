import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 40px;
`

export const NavLink = styled(link).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.colors.fonts.accent,
  },
  exact: true,
}))`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.fonts.header};
  margin: 0 20px;
  text-decoration: none;
`
