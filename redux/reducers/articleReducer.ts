import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface ArticleType{
    
     passengerId: string;
     name: string;  
     teamId: string;
     subject: string;
        }

// state
export interface ArticleState{
    Loading: boolean;
    data: ArticleType[];
    error: any;
    
}


const initialState: ArticleState = {
    Loading: false,
    data: [],
    error: null
}

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        joinRequest: (state: ArticleState, payload)=>{
             alert('진행2.리듀서내부')
             state.Loading = true;
            },
        joinSuccess(state: ArticleState, {payload}){
            state.data = [...state.data, payload]
            state.Loading = false;
        },
        joinFailure(state: ArticleState, {payload}){ 
            state.data = payload; 
            state.Loading = false;
        }
    }
})
const { reducer, actions } = articleSlice
export const articleActions = actions
export default reducer