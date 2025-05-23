import { createSlice } from "@reduxjs/toolkit";

const user={
    name:"Abdo",
    age:20,
    country:'MA'
}
 const userSlice=createSlice({
    name:'user',
    initialState:user,
    reducers:{
            resetInfo: (state)=>{
                state.name=undefined
                state.age=undefined
                state.country=undefined
            },
            updayeInfo: (state,action)=>console.log(action)
    }
})

export const {resetInfo,updayeInfo}=userSlice.actions

export default userSlice.reducer