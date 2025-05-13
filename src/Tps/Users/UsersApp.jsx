import React, { createContext, useState } from 'react'


import UsersLayout from './UsersLayout'

 export const UsersContext=createContext({
    users:[],
    lastId:0,
    addUser:()=>null,
    updateUser:()=>null,
 })

function UsersApp() {
    const [users,setUsers]=useState([])
    const [lastId,setLastId]=useState(0)
    const addUser=(data)=>{
       setUsers(preveState=>[...preveState,data.payload])
       setLastId(preveState=>preveState+1)
    }
    const updateUser=(data)=>{
          const {id,...rest}=data.payload
          setUsers(preveState=>preveState.map(user=>{
            if(user.id===id){
                return {id:user.id,...rest}
            }
            return user
          }))
          
    }
  return (
    <>
       <UsersContext.Provider value={{
        users:users,
        lastId:lastId,
        addUser:addUser,
        updateUser:updateUser,
       }}>
       <UsersLayout/>
       </UsersContext.Provider>
    </>

  )
}

export default UsersApp
