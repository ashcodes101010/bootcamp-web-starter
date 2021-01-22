import React, { useState } from 'react'
import { Container, Row, Button, Search } from './styles'
import { useHistory } from 'react-router-dom'


const Home = () => {
    
    const history = useHistory()
    const[item, setItem] = useState()
    console.log(item)
    
    return (
        <Container>
            <h1>Welcome to The Marketplace!</h1>
            <p>The one stop for all your online shopping</p>
            <Row>
                <Search placeholder='Search items' value={item} onChange={e => setItem(e.target.value)} />
                <Button onClick={() => history.push(`/search/${item}`)}>Search</Button>
            </Row>
        </Container>
    )}


export default Home
