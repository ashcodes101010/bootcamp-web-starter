import React from 'react'

import { Container, StyledInput } from './styles'

const Photo = ({ value, setValue }) => (
  <Container>
    <h2>Current photo</h2>
    <img src={value} alt="(your item)" width="250" height="300" />
    <h2>Choose a photo</h2>
    <StyledInput
      value={value}
      onChange={e => setValue({ imgUrl: e.target.value })}
      placeholder="Valid image url"
    />
  </Container>
)

export default Photo
