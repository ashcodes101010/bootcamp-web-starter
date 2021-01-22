import React, { useReducer } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { UPDATE_ITEM, SPECIFIC_ITEM } from './graphql'

import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'
import { Body, FlexContainer } from '../styles'


const UpdateItem = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }
  const itemId = useParams().id
  const userId = localStorage.getItem('userId')

  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    description: '',
    name: '',
    imgUrl: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
    msg: '',
  })
  // necessary to strip __typename field
  const getTags = tags => {
    const tagList = []
    tags.map(({ tag }) => tagList.push({ tag }))
    return tagList
  }
  const [updateItem] = useMutation(UPDATE_ITEM, {
    variables: {
      id: itemId,
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
    onError: () => setForm({ errorMsg: 'Could not update listing. Please try again.' }),
    onCompleted: () => setForm({ msg: 'Listing updated!' }),
  })

  const { loading, error } = useQuery(SPECIFIC_ITEM, {
    variables: { id: itemId },
    onCompleted: data => {
      const {
        item: {
          name,
          imgUrl,
          description,
          price,
          stock,
          tags,
        },
      } = data
      setForm({
        description,
        name,
        imgUrl,
        price,
        stock,
        tags: getTags(tags),
      })
    },
  })

  if (loading) return <Body>Loading...</Body>
  if (error) return <Body>There was an error.</Body>

  return (
    <Body>
      <br />
      { form.msg !== '' && <div>{form.msg}</div> }
      <h1>Update Item Details</h1>
      <FlexContainer>
        <Photo value={form.imgUrl} setValue={setForm} />
        <ItemDetails value={form} setValue={setForm} action={updateItem} msg="Update Item Listing"/>
      </FlexContainer>
    </Body>
  )
}

export default UpdateItem
