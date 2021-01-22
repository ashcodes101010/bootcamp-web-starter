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

export const INCREMENT_STOCK = gql`
    mutation incrementStock ($id: ID!) {
        incrementStock (id: $id) {
             stock
        }
    }
`
