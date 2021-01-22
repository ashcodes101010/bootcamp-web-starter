import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useParams, useHistory } from 'react-router-dom'
import { 
  Container, 
  Header, 
  Grid, 
  Row, 
  ItemContainer, 
  SearchInput, 
  Button, 
  AddCartButton,
} from './styles'
import { ALL_ITEMS, ADD_ITEM } from './graphql'


const Search = () => {
    const userId = localStorage.getItem('userId')
    const history = useHistory()
    if (!localStorage.getItem('token')) {
        history.push('/')
    }
    const { id } = useParams()
    const[item, setItem] = useState()
    const[itemId, setItemId] = useState()
    
    const { data, loading, error} = useQuery(ALL_ITEMS, {
        variables: { 
            input: id,
        },
    })

  const [addCartItem] = useMutation(ADD_ITEM, {
    variables: {
      input: {
        userId,
        itemId,
      },
    },
  })

    if (loading) {
        return <Container>Loading...</Container>
    }
    
    if (error) {
        return <Container>Could not load search results.</Container>
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
                        <img src={item.imgUrl} height="300" width="270" alt="item" />
                        <p>{item.name}&emsp;${item.price}</p>
                        <p><strong>Seller:</strong> {item.seller.username}</p>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Tags:</strong> {item.tags.map(tag => { return `${tag.tag} `})}</p>
                        <p><strong>Stock:</strong> {item.stock}</p>
                        <AddCartButton 
                          value={item.id} 
                          onMouseEnter={e => setItemId(e.target.value)} 
                          onMouseLeave={() => setItemId('')} 
                          onClick={addCartItem}
                        >
                            Add to Cart
                        </AddCartButton>
                    </ItemContainer>
                ))}
            </Grid>
         }   
        </Container>
    )}


export default Search
