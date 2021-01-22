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
    
    const history = useHistory()
    const { id } = useParams()
    const[item, setItem] = useState()
    const[itemId, setItemId] = useState()
    
    const { data, loading, error, refetch } = useQuery(ALL_ITEMS, {
        variables: { 
            input: id,
        },
    })

    console.log(data)

    // const [addCartItem, error, loading] = useMutation(ADD_ITEM, {
    //     variables: {
    //       input: {
    //         userId: ?,
    //         itemId: itemId,
    //       },
    //     },
    //   })

    const [decrementStock, { error: addItemError, loading: addItemLoading }] = useMutation(DECREMENT_STOCK, {
        variables: {
        id: itemId
        },
        onCompleted: () => refetch()
    })

    if (loading) {
        return 'loading...'
    }
    
    if (error) {
        return 'ERROR'
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
            {data.searchItems.length === 0 ?
            <>
                <p>No items available</p>
            </>
            :
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
                            <button value={item.id} onMouseEnter={e => setItemId(e.target.value)} onMouseLeave={() => setItemId('')} onClick={decrementStock}>Add to Cart</button>

                            
                        </div>
                    ))}
                </ItemContainer>
            }   
        </>
    )}


export default Search
