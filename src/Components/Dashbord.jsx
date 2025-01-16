import React from 'react'

const Dashbord = ({transactions}) => {

    const income = transactions.filter(transactions => transactions.amount > 0).reduce((p,c) => p + c.amount ,0)
    const expance = transactions.filter(transactions => transactions.amount < 0).reduce((p,c) => p + c.amount ,0)
    const balance = transactions.reduce((p,c) => p+c.amount, 0 )
    

  return (
    <div className='row my-3 g-3'>

    <div className='col-sm-12 col-md-4'>
    <div className='card p-3 bg-success rounded-0'>
    <h1 className='text-light display-6'>Income:</h1>
    <h1 className='text-light display-1'>{income}</h1>
    </div>
    </div>

    <div className='col-sm-12 col-md-4'>
    <div className='card p-3 bg-danger rounded-0'>
    <h1 className='text-light display-6'>Expence:</h1>
    <h1 className='text-light display-1'>{expance}</h1>
    </div>
    </div>

    <div className='col-sm-12 col-md-4'>
    <div className='card p-3 bg-warning rounded-0'>
    <h1 className='text-light display-6'>Balance:</h1>
    <h1 className='text-light display-1'>{balance}</h1>
    </div>
    </div>
    </div>
  )
}

export default Dashbord
