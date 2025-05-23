import React from 'react'
import { useSelector } from 'react-redux'
import { userSelectore } from './userSelectore'

function User() {
    const selectore= useSelector(userSelectore)
  return <>{JSON.stringify(selectore)}</> 
}

export default User
