import gql from 'graphql-tag'


export const USER = gql`
   query user ($id: ID!) {
    user (id: $id) {
      username
      transactions {
        item {
          name
          description
          seller {
            username
          }
          price
        }
      }
      itemsSelling {
        id
        name
        price
        stock
        deleted
      }
      money
    }
  }
`
