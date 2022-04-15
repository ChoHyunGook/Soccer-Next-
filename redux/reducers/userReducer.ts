import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface UserType{
    
            userid: string;
            password: string;  
            email: string;
            name: string;  
            phone: string;
            birth: string;
            address: string;
        }

// state
export interface UserState{
    Loading: boolean;
    data: UserType[];
    error: any;
    
}


const initialState: UserState = {
    Loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload){
             alert('진행2.리듀서내부')
             state.Loading = true;
            },
        joinSuccess(state: UserState, {payload}){
            state.data = [...state.data, payload]
            state.Loading = false;
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload; 
            state.Loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer