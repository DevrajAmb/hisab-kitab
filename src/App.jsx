import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Dashbord from './Components/Dashbord'
import ListGroup from './Components/ListGroup'
import { use } from 'react'



const App = () => {

const[transactions, setTransactions] =  useState ([]);
const[edit , setEdit ] = useState ({transactions: {}, isEdit: false});

//Add Transaction 
const addTranaction = (text , amount) => {
setTransactions([{id: crypto.randomUUID(),  text, amount}, ...transactions])
}

//Remove Transaction
const removeTransaction = (id) => {
  setTransactions(transactions.filter(transactions => transactions.id !==id)) 
}


//Edit Transaction
const editTransaction =  (transactions) => {
  setEdit({transactions: transactions, isEdit: true});
}

//Update Transaction
const updatedTransaction = (updatedTransacation) => {
setTransactions(
  transactions.map((transactions) => 
  transactions.id === updatedTransacation.id
? updatedTransacation : transactions)
);
setEdit({transactions: {} , isEdit: false})
}


  return (
    <>
    <Navbar />
      <div className="container p-5">
        <Form  addTranaction={addTranaction}
        updatedTransaction = {updatedTransaction}
        edit={edit}/>
        <Dashbord transactions={transactions} />
        <ListGroup transactions={transactions}
         removeTransaction={removeTransaction}
         editTransaction = {editTransaction} />
      </div>
    </>
  )
}

export default App
