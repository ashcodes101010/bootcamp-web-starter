import gql from 'graphql-tag'

export const ALL_ITEMS = gql`
    query searchItems($input: String!) {
        searchItems(input: $input) {
            id
            name
            imgUrl
            seller {
                username
            }
            description
            tags {
                tag
            }
            price
            stock
        }
    }
`

export const ADD_ITEM = gql`
    mutation addCartItem($input: CartInput!) {
        addCartItem(input: $input) {
            id
            item {
                id
            }
        }
    }
`
