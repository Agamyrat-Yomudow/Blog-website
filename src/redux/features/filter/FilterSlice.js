import { createSlice } from "@reduxjs/toolkit";



const initialState={
    tags:[],
    search:''
}

const filterSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{
        tagSelected:(state,action)=>{
            state.tags=action.payload
        }
    }
})
export default filterSlice.reducer;
export const {tagSelected,searched}=filterSlice.actions