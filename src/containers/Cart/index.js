import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { REMOVE_ITEM, GET_CART, INCREMENT_STOCK } from './graphql'
import { useHistory } from 'react-router-dom'

import { Body, Container, Items, StyledButton, Remove } from './styles'

const Cart = () => {
  const userId = localStorage.getItem('userId')
  const history = useHistory()

  const [cartItemId, setCartItemId] = useState('')
  const [itemId, setItemId] = useState('')
  const [msg, setMsg] = useState('')

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

  const [incrementStock] = useMutation(INCREMENT_STOCK, {
    variables: { id: itemId },
    onError: () => setMsg('Could not remove from cart'),
  })

  const handleRemoval = () => {
    incrementStock()
    removeCartItem()
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
          const { item : { id, name, description, imgUrl, price, seller: { username } } } = cart
          return (
            <Container key={cart.id}>
              <img src={imgUrl} alt="Item" height="150" width="150"/>
              <p>{name}</p>
              <p>{`$${price}`}</p>
              <p>{description}</p>
              <p>{`Seller: ${username}`}</p>
              <Remove 
                type="button" 
                onMouseEnter={() => {
                  setCartItemId(cart.id)
                  setItemId(id)
                }} 
                onMouseLeave={() => {
                  setCartItemId('')
                  setItemId('')
                }} 
                onClick={handleRemoval}
              >
                Remove
              </Remove>
            </Container>
          )
        })}
      </Items>
      <StyledButton 
        type="button" 
        onClick={() => history.push('/checkout')}
      >
        Proceed to Checkout
      </StyledButton>
      <br />
    </Body>
  )
}

export default Cart
