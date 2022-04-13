import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const boardSlice = createSlice({
     name: 'boards',
     initialState,
     reducers : {
          addBoard: (state,action)=>{
               alert('리듀서 내부에서 할일은 ?'+ action.payload.write)
               const boardWrite ={id: new Date(), write:action.payload.write,completed:false}
               state.push(boardWrite)
          }
     
     }
})
export const {addBoard} = boardSlice.actions

export default boardSlice.reducer
