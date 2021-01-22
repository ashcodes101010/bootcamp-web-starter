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
  // if (localStorage.getItem('token')) {
  //   history.push('/home')
  // }
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, {loading, error}] = useMutation(LOGIN, {
    variables: {
      email,
      password: pass,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
      window.location.reload()
    },
  })
  return (
    <Container>
      <LoginContainer>
        <Title>Log In</Title>
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
        <Button onClick={login}>Login</Button>
        <br></br>
        <Text>Don&apos;t have an account yet?&nbsp;
            <Link to="/register">Register</Link>
        </Text>
      </LoginContainer>
    </Container>
  )
}

export default Login
