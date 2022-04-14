import { createSlice } from "@reduxjs/toolkit"

const initialState = {}
export const basicSlice = createSlice({
     name : 'basics',
     initialState : [],
     reducers:{
          bmi(state,action){},
          calc(state,action){},
          counter(state,action){},
          enchant(state,action){},
          grade(state,action){},
          rps(state,action){}
     }
})
export default basicSlice.reducer