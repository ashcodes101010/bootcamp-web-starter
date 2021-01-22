import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'

import Account from './containers/Account'
import AddItem from './containers/Item/AddItem'
import AddMoney from './containers/AddMoney'
import Cart from './containers/Cart'
import ChangePassword from './containers/ChangePassword'
import Home from './containers/Home'
import Login from './containers/Login'
import Navbar from './components/Navbar'
import Register from './containers/Register'
import ScrollToTop from './functions/ScrollToTop'
import Search from './containers/Search'
import UpdateItem from './containers/Item/UpdateItem'


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/account" component={Account} />
            <Route path="/add-item" component={AddItem} />
            <Route path="/add-money" component={AddMoney} />
            <Route path="/cart" component={Cart} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/update-item/:id" component={UpdateItem} />
            <Route path="/search/:id" component={Search} children={<Search />} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
