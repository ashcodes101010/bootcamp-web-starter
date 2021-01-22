import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Container, Row, ItemContainer } from './styles'
import { ALL_ITEMS, ADD_ITEM, DECREMENT_STOCK } from './graphql'


const Search = () => {
    
    const history = useHistory()
    const { id } = useParams()
    const[item, setItem] = useState()
    const[itemId, setItemId] = useState()
    console.log(itemId)
    
    const { data, loading, error } = useQuery(ALL_ITEMS, {
        variables: { 
            input: id,
        },
    })
    
    if (error) {
        throw new Error('query failed')
    }

    // const [addItem, error, loading] = useMutation(ADD_ITEM, {
    //     variables: {
    //       input: {
    //         userId: ?,
    //         itemId: itemId,
    //       },
    //     },
    //   })

    // const [decrementStock, { error: addItemError, loading: addItemLoading }] = useMutation(DECREMENT_STOCK, {
    //     variables: {
    //     id: itemId
    //     },
    // })


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
                        <button value={item.id} onClick={e => setItemId(e.target.value)}>Add to Cart</button>
                        {/* <button onClick={decrementStock}>Stock</button> */}
                    </div>
                ))}
            </ItemContainer>
        </>
    )}


export default Search
