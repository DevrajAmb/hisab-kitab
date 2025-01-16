import React from 'react'

const ListItems = ({transaction, removeTransaction ,editTransaction }) => {
  return (
    <li className='list-group-item rounded-0'>
    <p className='text-secondary'>{transaction.text}</p>
    <h1 className='display-6'>{transaction.amount}</h1>
    <span className='float-end'>
      <button className="btn btn-sm btn-warning mx-1 rounded-0"
      onClick={() =>editTransaction(transaction)}>Edit</button>
      <button className="btn btn-sm btn-danger mx-1 rounded-0" 
      onClick={ () =>
      removeTransaction(transaction.id)}>Delete</button>
    </span>
  </li>
  )
}

export default ListItems
