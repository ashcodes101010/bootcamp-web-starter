/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Table, Container } from '../../styles'

const Transaction = ({ transactions }) => (
  <Container>
    <Table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Seller</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { transactions && transactions.map((trans, i) => (
          <tr key={i}>
            <td>{trans.item.name}</td>
            <td>{trans.item.description}</td>
            <td>{trans.item.seller.username}</td>
            <td>{`$${trans.item.price}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
)

export default Transaction
