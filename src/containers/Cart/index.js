import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { 
  CLEAR_CART, 
  REMOVE_ITEM, 
  REMOVE_MONEY, 
  GET_CART, 
  DECREMENT_STOCK, 
  ADD_TRANSACTIONS 
} from './graphql'
import { useHistory } from 'react-router-dom'

import { Body, Container, Items, StyledButton, Remove } from './styles'

const Cart = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }
  const userId = localStorage.getItem('userId')

  const [cartItemId, setCartItemId] = useState('')
  const [itemIds, setItemIds] = useState([])
  const [msg, setMsg] = useState('')
  const [money, setMoney] = useState('')

  const { data, loading, error, refetch } = useQuery(GET_CART, {
    variables: { id: userId },
    partialRefetch: true,
  })

  const [removeCartItem] = useMutation(REMOVE_ITEM, {
    variables: { id: cartItemId },
    onError: () => setMsg('Could not remove from cart'),
    onCompleted: () => {
      setMsg('')
      refetch()
    }
  })

  const [clearCart] = useMutation(CLEAR_CART, {
    variables: { id: userId },
    onError: () => setMsg('Could not complete purchase'),
    onCompleted: () => {
      setMsg('Thank you for your purchase(s)!')
      refetch()
    }
  })

  const [addTransactions] = useMutation(ADD_TRANSACTIONS, {
    variables: { id: userId, items: itemIds },
    onError: () => setMsg('Could not make purchase'),
  })

  const [decrementStock] = useMutation(DECREMENT_STOCK, {
    variables: { id: itemIds },
    onError: () => setMsg('Could not make purchase'),
  })

  const [removeMoney] = useMutation(REMOVE_MONEY, {
    variables: { id: userId, money },
    onError: () => setMsg('could not add funds'),
    onCompleted: () => {
      setMoney('')
    },
  })

  const handlePurchase = () => {
    decrementStock()
    addTransactions()
    removeMoney()
    clearCart()
  }

  const getIds = () => {
    let list = []
    data.cart.map(cart => list.push(cart.item.id))
    return list
  } 

  const getCost = () => {
    let cost = 0.0
    data.cart.map(cart => cost += cart.item.price)
    return cost
  }

  if (loading) return <Body>Loading...</Body>
  if (error) return <Body>Could not load cart.</Body>

  return (
    <Body>
      <br />
      {msg !== '' && <p>{msg}</p>}
      <h1>My Cart</h1>
      <Items>
        {data.cart.map(cart => {
          const { item : { name, description, imgUrl, price, seller: { username } } } = cart
          return (
            <Container key={cart.id}>
              <img src={imgUrl} alt="Item" height="150" width="150"/>
              <p>{name}&emsp;${price}</p>
              <p>{description}</p>
              <p><strong>Seller:</strong> {username}</p>
              <Remove 
                type="button" 
                onMouseEnter={() => {
                  setCartItemId(cart.id)
                }} 
                onMouseLeave={() => {
                  setCartItemId('')
                }} 
                onClick={removeCartItem}
              >
                Remove
              </Remove>
            </Container>
          )
        })}
      </Items>
      <StyledButton 
        type="button" 
        onClick={handlePurchase} 
        onMouseEnter={() => {
          setMoney(getCost())
          setItemIds(getIds())
        }} 
      >
        Purchase Items
      </StyledButton>
      <br />
    </Body>
  )
}

export default Cart