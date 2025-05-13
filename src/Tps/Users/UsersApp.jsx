import React, { createContext, useState } from 'react'

import UsersLayout from './UsersLayout'

 const UsersContext=createContext({
    users:[],
    lastId:0
 })

function UsersApp() {
    const [users,setUsers]=useState([])
    const [lastId,setLastId]=useState(0)
    const addUser=(data)=>{
       setUsers(preveState=>[...preveState,data.payload])
       setLastId(preveState=>preveState+1)
    }
  return (
    <>
       <UsersLayout/>
    </>

  )
}

export default UsersApp
