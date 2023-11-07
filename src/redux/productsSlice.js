import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call . createAsyncThunk

export const fetchProuducts=createAsyncThunk('(productList)/fetchProuducts',async()=>{
   const result=await axios.get('https://fakestoreapi.com/products')
   return result.data
})

//slice section
const productSlice=createSlice({
    name:'productList',
    initialState:{
        loading:false,
        allProducts:[],
        searchArray:[],
        error:''
    },
    reducers:{
//actions without api
searchProduct:(state,action)=>{
    state.allProducts=state.searchArray.filter(i=>i.title.toLowerCase().trim()
    .includes(action.payload.toLowerCase().trim()))
}

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProuducts.pending,(state)=>{
            state.loading=true
        
        })
        builder.addCase(fetchProuducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.searchArray=action.payload
            state.error=""
        })
        builder.addCase(fetchProuducts.rejected,(state,action)=>{
            state.loading=false
            state.allProducts=[]
            state.error=action.payload
        })

    }
})

export default productSlice.reducer
export const {searchProduct}=productSlice.actions
