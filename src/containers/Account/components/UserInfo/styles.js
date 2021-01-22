import styled from 'styled-components'

export const LeftUserInfo = styled.div`
  text-align: left;
  font-size: 25px;
`

export const RightUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
`

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledButton = styled.button`
  background-color: #575757;
  border-radius: 4px;
  height: 53px;
  width: 281px;
  font-size: 20px;
  padding: 10px;
  color: #FFFFFF;
  transition: background-color 0.2s;

  &:hover {
    background-color: #757575;
  }
`