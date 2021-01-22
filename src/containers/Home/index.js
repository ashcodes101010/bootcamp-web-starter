import React, { useState } from 'react'
import { Container, Row } from './styles'
import { useHistory } from 'react-router-dom'


const Home = () => {
    const history = useHistory()
    
    if (!localStorage.getItem('token')) {
        history.push('/')
    }
    const[item, setItem] = useState()
    console.log(item)
    
    return (
        <Container>
            <h1>Welcome to Marketplace!</h1>
            <p>The one stop for all your online shopping</p>
            <Row>
                <input placeholder='Search items' value={item} onChange={e => setItem(e.target.value)} />
                <button onClick={() => history.push(`/search/${item}`)}>Search</button>
            </Row>
        </Container>
    )}


export default Home
