import React from 'react'

function Counter() {
    const increment=()=>{
        
    }
    const decrement=()=>{

    }
  return (
    <div className='my-5'>
        <div className='text-center my-2'>
            0
            <samp className='badge badge-primary'></samp>

        </div>
        <div className='btn-group' role='group' aria-label='Basic example' >
            <button type="button" className='btn btn-primary' onClick={decrement}>&lt;Decrement</button>
            <button type="button" className='btn btn-primary' onClick={increment}>&lt;Decrement</button>
        </div>
      
    </div>
  )
}

export default Counter
