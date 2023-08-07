import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const loginUser=createAsyncThunk('loginUser',async({email,password})=>{
    console.log(process.env.REACT_APP_BASE_URL)
    const config={
            "Content-Type":"application/json",
            withCredentials:true
    }
    const body={
        email,
        password
    }
    const response=await Axios.post(`http://localhost:4000/app/v1/login`,
    body,
    config);
    return response.data;
});

export const loadUser=createAsyncThunk('loadUser',async()=>{
    const response=await Axios.get(`http://localhost:4000/app/v1/user`,{withCredentials:true});
    return response.data
})

export const logoutUser=createAsyncThunk('logoutUser',async()=>{
    const response=await Axios.get(`http://localhost:4000/app/v1/logout`,{withCredentials:true})
    return response.data;
})

export const updateUser=createAsyncThunk('updateUser',async(profile)=>{

    const config={
        "Content-Type":"application/json",
        withCredentials:true
    }

    const response=await Axios.post(`http://localhost:4000/app/v1/user/update`,profile,config);
    return response.data;
})

export const addCart=createAsyncThunk('addCart',async({quantity,product_id})=>{

    const config={
        "Content-Type":"application/json",
        withCredentials:true
    }

    const response=await Axios.post(`http://localhost:4000/app/v1/cart/new/${product_id}`,{quantity},config)

    console.log(response.data)
    return response.data;

})

export const deleteCart=createAsyncThunk('deleteCart',async(cart_id)=>{


    const response=await Axios.delete(`http://localhost:4000/app/v1/user/cart/${cart_id}`,{withCredentials:true});
    return response.data;
})

const loginSlice=createSlice({
    name:'login',
    initialState:{
isLoading:false,
        data:null,
        error:false
    },        
    extraReducers:{
        [loginUser.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [loginUser.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [loadUser.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [loadUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [loadUser.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [logoutUser.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [logoutUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=null;
        },
        [logoutUser.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [addCart.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [addCart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [addCart.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload)
        },
        [updateUser.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [updateUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [updateUser.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload)
        },
        [deleteCart.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [deleteCart.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [deleteCart.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload)
        }
    }
})

export default loginSlice.reducer