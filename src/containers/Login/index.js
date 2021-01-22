import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
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
import { LOGIN } from './graphql'


const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, {loading, error}] = useMutation(LOGIN, {
    variables: {
      email,
      password: pass,
    },
    onCompleted: ({ login: { token, user: { id } } }) => {
      localStorage.setItem('token', token)
      localStorage.setItem('userId', id)
      history.push('/home')
    },
  })
  return (
    <Container>
      <LoginContainer>
        <Title>Log In</Title>
        <Label>Email</Label>
        <Input
          type="text"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          onChange={e => setPass(e.target.value)}
          value={pass}
        />
        <Button onClick={login}>Login</Button>
        <Text>Don&apos;t have an account yet?&nbsp;
            <Link to="/register">Register</Link>
        </Text>
      </LoginContainer>
    </Container>
  )
}

export default Login