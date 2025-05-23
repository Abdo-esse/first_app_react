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
        user:{

        }
    }
})


export default userSlice.reducer