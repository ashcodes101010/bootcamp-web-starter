/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { ADD_MONEY } from './graphql'

import { StyledButton, Container, Body, InputContainer } from './styles'

const AddMoney = () => {
  const [money, setMoney] = useState('')
  const [msg, setMsg] = useState('')
  // UPDATE PLACEHOLDER W/ TOKEN USERID EVENTUALLY
  const [addMoney] = useMutation(ADD_MONEY, {
    variables: { id: '5b5ead2b-490d-4b63-91a5-413eb67ec209', money },
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
