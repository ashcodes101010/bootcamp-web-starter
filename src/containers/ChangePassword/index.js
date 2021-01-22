import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { CHANGE_PASS } from './graphql'

import PassInput from './components/PassInput'
import { StyledButton, Container, Body } from './styles'
import { useHistory } from 'react-router-dom'

const ChangePassword = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }

  const userId = localStorage.getItem('userId')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [msg, setMsg] = useState('')


  // UPDATE PLACEHOLDER W/ TOKEN USERID EVENTUALLY
  const [changePassword] = useMutation(CHANGE_PASS, {
    variables: { id: userId, password: newPass },
    onCompleted: () => {
      setMsg('password updated!')
      setNewPass('')
      setConfirmPass('')
    },
    onError: () => setMsg('could not change password'),
  })

  const handleSubmit = async () => {
    if (newPass !== confirmPass) {
      setMsg('passwords do not match')
    } else {
      changePassword()
    }
  }

  return (
    <Body>
      <br />
      {msg !== '' && <div>{msg}</div>}
      <Container>
        <h3>Change Password:</h3>
        <PassInput
          value={newPass}
          setValue={setNewPass}
          placeholder="New Password"
        />
        <br />
        <PassInput
          value={confirmPass}
          setValue={setConfirmPass}
          placeholder="Confirm New Password"
        />
        {confirmPass !== newPass && confirmPass !== '' && <p>passwords do not match!</p>}
        <br />
        <StyledButton type="button" onClick={handleSubmit}>Change</StyledButton>
      </Container>
    </Body>
  )
}

export default ChangePassword
