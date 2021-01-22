import React from 'react'

import { StyledInput } from './styles'

const PassInput = ({ value, setValue, placeholder }) => (
  <StyledInput
    type="password"
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder={placeholder}
  />
)

export default PassInput
