import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
export const boardSlice = createSlice({
     name: 'boards',
     initialState,
     reducers : {
          boardform(state,action){},
          boardlist(state,action){}
     }
})

export default boardSlice.reducer
