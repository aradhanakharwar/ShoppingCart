import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk(
    'abcd',
    async()=>{
        const response=await fetch ('https://fakestoreapi.com/products');
        const Data=await response.json();
        return Data;
    }
)

const HomeSlice=createSlice({
    name:'abc',
    initialState:{
        data:[],
        status:""
    },
    reducers:{},
    extraReducers:(build)=>{
        build
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status="";
        })
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status="Loading...";
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status="Error";
        })
    }
})

export default HomeSlice.reducer