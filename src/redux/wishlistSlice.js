import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //update state,action = parameter used t
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeWishList:(state,action)=>{
            //return new  filtered array
            return state.filter(i=>i.id!=action.payload)
        }
    }
})
//export reducer
export default wishListSlice.reducer

//action
export const {addToWishList,removeWishList}=wishListSlice.actions