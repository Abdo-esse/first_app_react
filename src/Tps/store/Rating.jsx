import React from 'react'

function Rating({count,rate}) {
  return (
    <>
      <span className='badge bagde-pill badge-primary'>{count}/{rate}</span>
    </>
  )
}

export default Rating
