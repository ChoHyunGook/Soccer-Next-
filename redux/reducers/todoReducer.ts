import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface TodoType{
    
               userid: '';
               task: '';
               completed: ''
        }

// state
export interface TodoState{
    Loading: boolean;
    data: TodoType[];
    error: any;
    
}


const initialState: TodoState = {
    Loading: false,
    data: [],
    error: null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        joinRequest(state: TodoState, payload){
             alert('진행2.리듀서내부')
             state.Loading = true;
            },
        joinSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.Loading = false;
        },
        joinFailure(state: TodoState, {payload}){ 
            state.data = payload; 
            state.Loading = false;
        }
    }
})
const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer