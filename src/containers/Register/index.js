import React, { useState, useEffect } from 'react'
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
import { REGISTER } from './graphql'


const Register = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setAState] = useState('')
  const [country, setCountry] = useState('')
  const [zip, setZip] = useState('')
  const [register, {loading, error}] = useMutation(REGISTER, {
    variables: {
      username,
      email,
      password: pass,
      age,
      address: {
          street,
          city,
          state,
          country
      }
    },
    onCompleted: ({ register: { token, user: { id } } }) => {
      localStorage.setItem('token', token)
      localStorage.setItem('userId', id)
      history.push('/home')
    },
})

const ValidEmail= () => {
    const [emailCheck, setEmailCheck] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://apilayer.net/api/check?access_key=d8f63b4dee87bd7953253e42a4b60767&email=${email}&format=1`)
        const data = await res.json()
        setEmailCheck(`${(data.emailCheck[0].format_valid) && (data.emailCheck[0].smtp_check)}`)
      }
      fetchData()
    }, [])
    return (
      emailCheck
    )
  }

  return (
    <Container>
      <LoginContainer>
        <Title>Register</Title>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
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
        <Label>Age</Label>
        <Input
          type="number"
          name="age"
          onChange={e => setAge(e.target.value)}
          value={age}
        />
        <Label>Street Address</Label>
        <Input
          type="text"
          name="street"
          onChange={e => setStreet(e.target.value)}
          value={street}
        />
        <Label>City</Label>
        <Input
          type="text"
          name="city"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <Label>State (optional)</Label>
        <Input
          type="text"
          name="state"
          onChange={e => setAState(e.target.value)}
          value={state}
        />
        <Label>Country</Label>
        <Input
          type="text"
          name="country"
          onChange={e => setCountry(e.target.value)}
          value={country}
        />
        <Label>Zip</Label>
        <Input
          type="number"
          name="zip"
          onChange={e => setZip(e.target.value)}
          value={zip}
        />
        <Button onClick={register}>Register</Button>
        <Text>Already a Member?&nbsp;
            <Link to="/login">Log In</Link>
        </Text>
        <Text>
          <ValidEmail />
        </Text>
      </LoginContainer>
    </Container>
  )
}

export default Register