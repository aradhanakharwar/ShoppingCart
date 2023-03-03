import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
           state.push(action.payload);
           console.log("addToCart",state)
        },
        removeFromCart(state,action){
          return state.filter(item=>item.id!==action.payload)
        }

    }

})

export default cartSlice.reducer;
export const {addToCart,removeFromCart}=cartSlice.actions
