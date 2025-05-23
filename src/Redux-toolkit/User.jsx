import React from 'react'
import { useSelector } from 'react-redux'
import { userSelectore } from './userSelectore'

function User() {
    const user= useSelector(userSelectore)
  return (
  <>

    <div className='px-4 pt-5 text-center border-bottom'>
        <h1 className='display-4 fw-bold'>{user.name } ({user.age})</h1>
        <div className='mx-auto'>
            <p className='lead mb-4'>
                <img src={`https://flagcdn.com/48x36/${user.country.toLowerCase()}.png`} />
            </p>
        </div>
    </div>
  
  </> )
}

export default User
