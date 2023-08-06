import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const newWishList=createAsyncThunk('newWishList',async(product_id)=>{

    const config={
        "Content-Type":"application/json",
        withCredentials:true
    }
    const response=await Axios.post(`http://localhost:4000/app/v1/wishlist/${product_id}`,{},config);
    console.log(response.data);
    return response.data;
})

export const getAllWishList=createAsyncThunk('getAllWishList',async()=>{

    const response=await Axios.get(`http://localhost:4000/app/v1/wishlist`,{withCredentials:true})
    return response.data;
})

export const deleteWishList=createAsyncThunk('deleteWishList',async(product_id)=>{

    const response=await Axios.delete(`http://localhost:4000/app/v1/user/wishlist/${product_id}`,{withCredentials:true})
    return response.data;
})

const WishListSlice=createSlice({
    name:'wishList',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:{
        [newWishList.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [newWishList.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.error=false;
            state.data=action.payload;
        },
        [newWishList.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=true;
            console.log('error',action.payload);
        },
        [getAllWishList.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getAllWishList.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [getAllWishList.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [deleteWishList.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [deleteWishList.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [deleteWishList.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        }
    }
})

export default WishListSlice.reducer