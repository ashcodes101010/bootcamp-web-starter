import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER } from './graphql'
import { useHistory } from 'react-router-dom'

import UserInfo from './components/UserInfo'
import Transaction from './components/Transaction'
import Shop from './components/Shop'
import { Body } from './styles'


const Account = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }
  const userId = localStorage.getItem('userId')

  const { data, loading, error, refetch } = useQuery(USER, {
    variables: { id: userId },
    partialRefetch: true,
  })

  if (error) return (<Body>Unable to load account info.</Body>)
  if (loading) return (<Body>Loading...</Body>)
  
  const {
    user: {
      username,
      transactions,
      itemsSelling,
      money,
    },
  } = data

  return (
    <Body>
      <br />
      <h1>My Account</h1>
      <UserInfo username={username} money={money} />
      <h2>Transaction History</h2>
      <Transaction transactions={transactions} />
      <h2>My Shop</h2>
      <Shop items={itemsSelling} refetch={refetch} transactions={transactions} />
      <br />
    </Body>
  )
}

export default Account
