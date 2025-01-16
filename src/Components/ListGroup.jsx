import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({transactions , removeTransaction, editTransaction}) => {
  return (
    <ul className="my-2 list-group">
    {
        transactions.map(transaction => <ListItems key={transaction.id} 
            transaction={transaction}
            removeTransaction={removeTransaction}
            editTransaction = {editTransaction}
             />)
    }
  </ul>
  )
}

export default ListGroup
