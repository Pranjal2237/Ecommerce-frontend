import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'


export const getAllOrders=createAsyncThunk('getAllOrders',async()=>{

    const response=await Axios.get(`http://localhost:4000/app/v1/orders`,{withCredentials:true})
    console.log(response.data);
    return response.data;
})

export const getSingleOrder=createAsyncThunk('getSingleOrder',async({order_id,product_id})=>{

    console.log(order_id);
    console.log(product_id);

    const response=await Axios.get(`http://localhost:4000/app/v1/order/${order_id}/${product_id}`,{withCredentials:true})
    console.log(response.data)
    return response.data;
})

export const newOrder=createAsyncThunk('newOrder',async({shippingInfo,orderItems,paymentInfo,itemsPrice,taxPrice,shippingPrice,totalPrice})=>{

    const config={
        "Content-Type":"application/json",
        withCredentials:true
    }
    const body={
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }
    console.log(body);

    const response=await Axios.post(`http://localhost:4000/app/v1/order/new`,body,config)
    console.log(response.data)
    return response.data;
})

const orderSlice=createSlice({
    name:'order',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:{
        [getAllOrders.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getAllOrders.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [getAllOrders.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [getSingleOrder.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getSingleOrder.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [getSingleOrder.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [newOrder.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [newOrder.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [newOrder.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        }
    }
})

export default orderSlice.reducer;