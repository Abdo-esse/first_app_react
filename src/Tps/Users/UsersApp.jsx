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
    const [lastId,setLastId]=useState(0)
    const addUser=(data)=>{
       setUsers(preveState=>[...preveState,data.payload])
       setLastId(preveState=>preveState+1)
    }
  return (
    <>
    <UsersAdd lastId={lastId} onAddUser={addUser} />
    <hr />
    <UsersTable users={users}/>
    </>

  )
}

export default UsersApp
