import React, { createContext, useState } from 'react'


import UsersLayout from './UsersLayout'

 export const UsersContext=createContext({
    users:[],
    lastId:0,
    addUser:()=>null
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
       <UsersContext.Provider value={{
        users:users,
        lastId:lastId,
        addUser:addUser
       }}>
       <UsersLayout/>
       </UsersContext.Provider>
    </>

  )
}

export default UsersApp
