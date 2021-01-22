/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { ADD_MONEY } from './graphql'
import { useHistory } from 'react-router-dom'

import { StyledButton, Container, Body, InputContainer } from './styles'

const AddMoney = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }
  const userId = localStorage.getItem('userId')
  
  const [money, setMoney] = useState('')
  const [msg, setMsg] = useState('')

  const [addMoney] = useMutation(ADD_MONEY, {
    variables: { id: userId, money },
    onError: () => setMsg('could not add funds'),
    onCompleted: () => {
      setMsg(`$${money} added to balance`)
      setMoney('')
    },
  })

  const handleChange = e => {
    if (e.target.value === '') {
      setMoney('')
      return
    }
    setMoney(Math.max(0, Math.min(10000, Number(e.target.value))))
  }

  return (
    <Body>
      <br />
      {msg !== '' && <div>{msg}</div>}
      <Container>
        <h3>Enter Amount (in USD):</h3>
        <InputContainer>
          <label htmlFor="money">$</label>
          <input
            id="money"
            type="number"
            min="0"
            max="100000"
            placeholder="0.00"
            value={money}
            onChange={handleChange}
          />
        </InputContainer>
        <br />
        { money !== '' && <StyledButton type="button" onClick={addMoney}>Add to Balance</StyledButton> }
      </Container>
    </Body>
  )
}

export default AddMoney
