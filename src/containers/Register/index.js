import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Container,
  LoginContainer,
  Label,
  Input,
  Title,
  Button,
  Text,
  IncPass
} from './styles'

import { REGISTER } from './graphql'

const Register = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [register] = useMutation(REGISTER, {
    variables: {
      input: {
        username,
        email,
        password: pass,
        age: parseInt(age)
      }
    },
    onCompleted: ({ register: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    },
    onError: error => console.log(error)
})
const handleSubmit = async () => {
  if (await fetchData()) {
    register()
  }
}

const fetchData = async () => {
  console.log(email)
  const res = await fetch(`https://apilayer.net/api/check?access_key=d8f63b4dee87bd7953253e42a4b60767&email=${email}&format=1`)
  const data = await res.json()
  if(!data.email.format_valid && !data.email.smtp_check) {
    console.log('Email does not exist anywhere')
    return false
  }

}

  return (
    <Container>
      <LoginContainer>
        <Title>Register</Title>
        <Text>Kindly fill in your login details to proceed</Text>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPass(e.target.value)}
          value={pass}
        />
        <Input
          type="number"
          name="age"
          placeholder="Age (Must be 16+)"
          onChange={e => setAge(e.target.value)}
          value={age}
        />
        <Button onClick={handleSubmit}>Register</Button>
        <br></br>
        <Text>Already a Member?&nbsp;
            <Link to="/login">Log In</Link>
        </Text>
        <Text>
        </Text>
      </LoginContainer>
    </Container>
  )
}


export default Register