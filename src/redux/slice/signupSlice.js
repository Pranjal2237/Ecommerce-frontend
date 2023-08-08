import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const signupUser=createAsyncThunk('signupUser',async({name,email,password})=>{
    const config={
        "Content-Type":"application/json"
    }
    const body={
        name,
        email,
        password
    }
    const response=await Axios.post(`https://ecomerceserver.onrender.com/app/v1/ragister`,body,config);
    return response.data;
})

const signupSlice=createSlice({
    name:'signup',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(signupUser.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(signupUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            alert(`Account created Successfully`)
        })
        builder.addCase(signupUser.rejected,(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        })
    }
})


export default signupSlice.reducer;