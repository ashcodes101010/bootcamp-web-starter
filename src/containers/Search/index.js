import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Container, Header, Grid, Row, ItemContainer, SearchInput, Button } from './styles'
import { ALL_ITEMS, ADD_ITEM } from './graphql'

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
    if (!localStorage.getItem('token')) {
        history.push('/')
    }
    const { id } = useParams()
    const[item, setItem] = useState()
    const[itemId, setItemId] = useState()
    
    const { data, loading, error, refetch } = useQuery(ALL_ITEMS, {
        variables: { 
            input: id,
        },
    })

  // const [addCartItem, { error: addItemError, loading: addItemLoading }] = useMutation(ADD_ITEM, {
  //   variables: {
  //     input: {
  //       userId: ?,
  //       itemId: itemId,
  //     },
  //   },
  // })

    if (loading) {
        return 'loading...'
    }
    
    if (error) {
        return 'ERROR'
    }

    return (
      <Container>
        <Header>
          <h2>Search results for: { id }</h2>
          <Row>
              <SearchInput placeholder='Search items' value={item} onChange={e => setItem(e.target.value)} />
              <Button onClick={() => history.push(`/search/${item}`)}>Search</Button>
          </Row>
        </Header>
        {data.searchItems.length === 0 ?
        <>
            <p>No items available</p>
        </>
        :
            <Grid>
                {loading ? 'loading...' : data.searchItems.map(item => (
                    <ItemContainer>
                        <img src={item.imgUrl}/>
                        <p>name: {item.name}</p>
                        <p>seller: {item.seller.username}</p>
                        <p>desc: {item.description}</p>
                        <p>tags: {item.tags.map(tag => { return `${tag.tag} `})}</p>
                        <p>price: ${item.price}</p>
                        <p>stock: {item.stock}</p>
                        <button value={item.id} onMouseEnter={e => setItemId(e.target.value)} onMouseLeave={() => setItemId('')} onClick={handleCart}>Add to Cart</button>
                    </ItemContainer>
                ))}
            </Grid>
         }   
        </Container>
    )}


export default Search
