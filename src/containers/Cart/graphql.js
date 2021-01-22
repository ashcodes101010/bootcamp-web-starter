import gql from 'graphql-tag'

export const GET_CART = gql`
  query cart ($id: ID!) {
    cart (id: $id) {
      id
      item {
        id
        name
        price
        description
        imgUrl
        seller {
          username
        }
      }
    }
  }
`

export const REMOVE_ITEM = gql`
  mutation removeCartItem ($id: ID!) {
    removeCartItem (id: $id) {
      id
    }
  }
`

export const CLEAR_CART = gql`
  mutation clearCart ($id: ID!) {
    clearCart (id: $id) {
      id
    }
  }
`

export const DECREMENT_STOCK = gql`
    mutation decrementStock($id: [ID!]!) {
        decrementStock(id: $id) 
    }
`

export const ADD_TRANSACTIONS = gql`
    mutation addTransactions($id: ID!, $items: [ID!]!) {
      addTransactions(id: $id, items: $items) 
    }
`

export const REMOVE_MONEY = gql`
  mutation removeMoney ($id: ID!, $money: Float!) {
    removeMoney (id: $id, money: $money) {
      money
    }
  }
`
