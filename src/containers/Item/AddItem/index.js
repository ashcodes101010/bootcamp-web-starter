import React, { useReducer, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_ITEM } from './graphql'
import { useHistory } from 'react-router-dom'

import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'
import { Body, FlexContainer } from '../styles'

const AddItem = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }
  const initialState = {
    description: '',
    imgUrl: '',
    name: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
  }
  const userId = localStorage.getItem('userId')

  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, initialState)
  const [msg, setMsg] = useState('')

  const [createItem] = useMutation(CREATE_ITEM, {
    variables: {
      input: {
        name: form.name,
        sellerId: userId,
        imgUrl: form.imgUrl,
        description: form.description,
        price: form.price,
        stock: form.stock,
        tags: form.tags,
      },
    },
    onCompleted: () => {
      setForm(initialState)
      setMsg('Listing created!')
    },
    onError: () => setMsg('Could not create listing. Please try again.'),
  })

  return (
    <Body>
      <br />
      { msg !== '' && <div>{msg}</div> }
      <h1>Add Item to Shop</h1>
      <FlexContainer>
        <Photo value={form.imgUrl} setValue={setForm} />
        <ItemDetails value={form} setValue={setForm} action={createItem} msg="Post Item Listing" />
      </FlexContainer>
    </Body>
  )
}

export default AddItem
