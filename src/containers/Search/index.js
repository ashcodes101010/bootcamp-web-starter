import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Container, Row, ItemContainer } from './styles'
import { ALL_ITEMS, ADD_ITEM, DECREMENT_STOCK } from './graphql'

// const jwt = require('jsonwebtoken')
// const token = localStorage.getItem('token')
// const decodeToken = token => {
//     if (!token) {
//         history.push('/login')
//     }
//     try {
//         return jwt.verify(token, config.tokenSecret)
//     } catch (error) {
//         history.push('/login')
//     }
// }


const Search = () => {
    const userId = localStorage.getItem('userId')
    const history = useHistory()
    const { id } = useParams()
    const[item, setItem] = useState()
    const[itemId, setItemId] = useState()
    
    const { data, loading, error, refetch } = useQuery(ALL_ITEMS, {
        variables: { 
            input: id,
        },
    })
    
    if (error) {
        throw new Error('query failed')
    }

  const [addCartItem, { error: addItemError, loading: addItemLoading }] = useMutation(ADD_ITEM, {
    variables: {
      input: {
        userId,
        itemId,
      },
    },
  })

  const [decrementStock, { error: decrementError, loading: decrementLoading }] = useMutation(DECREMENT_STOCK, {
    variables: {
      id: itemId,
    },
    onCompleted: () => refetch()
  })

  const handleCart = () => {
    addCartItem()
    decrementStock()
  }

    return (
        <>
            <Container>
                <h1>Search results for: { id }</h1>
                <Row>
                    <input placeholder='Search items' value={item} onChange={e => setItem(e.target.value)} />
                    <button onClick={() => history.push(`/search/${item}`)}>Search</button>
                </Row>
            </Container>
            <ItemContainer>
                {loading ? 'loading...' : data.searchItems.map(item => (
                    <div>
                        <img src={item.imgUrl}/>
                        <p>name: {item.name}</p>
                        <p>seller: {item.seller.username}</p>
                        <p>desc: {item.description}</p>
                        <p>tags: {item.tags.map(tag => { return `${tag.tag} `})}</p>
                        <p>price: ${item.price}</p>
                        <p>stock: {item.stock}</p>
                        <button value={item.id} onMouseEnter={e => setItemId(e.target.value)} onMouseLeave={() => setItemId('')} onClick={handleCart}>Add to Cart</button>
                    </div>
                ))}
            </ItemContainer>
        </>
    )}


export default Search
