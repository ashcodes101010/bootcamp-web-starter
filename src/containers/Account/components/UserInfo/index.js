import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from '../../styles'
import { LeftUserInfo, UserInfoDiv, StyledButton, RightUserInfo } from './styles'


const UserInfo = ({ username, money }) => {
  const history = useHistory()
  return (
    <Container>
      <UserInfoDiv>
        <LeftUserInfo>
          <p>
            <strong>Username:</strong>&nbsp;
            {username}
          </p>
          <p>
          <strong>Account Balance:</strong>&nbsp;
            {`$${money}`}
          </p>
        </LeftUserInfo>
        <RightUserInfo>
          <StyledButton 
            type="button" 
            onClick={() => history.push('/change-password')}
          >
            Change Password
          </StyledButton>
          <br />
          <StyledButton 
            type="button" 
            onClick={() => history.push('/add-money')}
          >
            Add Money to Balance
          </StyledButton>
        </RightUserInfo>
      </UserInfoDiv>
    </Container>
  )
}

export default UserInfo
