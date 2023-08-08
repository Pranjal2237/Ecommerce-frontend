import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const getSingleProduct=createAsyncThunk('getSingleProduct',async (product_id)=>{
    const response=await Axios.get(`https://ecomerceserver.onrender.com/app/v1/product/${product_id}`);
    return response.data;
})

export const reviewProduct=createAsyncThunk('reviewProduct',async({rating,comment,id})=>{
    const config={
        "Content-Type":"application/json",
        withCredentials:true
    }
    const response=await Axios.post(`https://ecomerceserver.onrender.com/app/v1/product/${id}`,{rating,comment},config);
    console.log(response.data);
    return response.data;
})

const singleProductSlice=createSlice({
    name:'singleProduct',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:{
        [getSingleProduct.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getSingleProduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [getSingleProduct.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [reviewProduct.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [reviewProduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [reviewProduct.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        }
    }
})

export default singleProductSlice.reducer