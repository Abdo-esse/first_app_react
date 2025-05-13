import React, { useState } from 'react'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'

const INITIAL_DATA=[
    {
        id:1,
        fullName:'ABDEL ILAH ESSEMLAI',
        country: 'Morocco'
    },
    {
        id:2,
        fullName:'ABDEL ILAH ESSEMLAI',
        country: 'Morocco'
    },
    {
        id:3,
        fullName:'ABDEL ILAH ESSEMLAI',
        country: 'Morocco'
    }
]

function UsersApp() {
    const [users,setUsers]=useState([])
  return (
    <>
    <UsersAdd/>
    <hr />
    <UsersTable users={users}/>
    </>

  )
}

export default UsersApp
