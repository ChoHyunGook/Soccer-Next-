import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
export const gameSlice = createSlice({
     name: 'games',
     initialState,
     reducers : {
          gamelist(state,action){},
          teamlist(state,action){}
     }
})

export default gameSlice.reducer