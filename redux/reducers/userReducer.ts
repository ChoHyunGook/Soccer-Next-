import { createSlice } from "@reduxjs/toolkit"



//payload
export interface JoinPayload{
    data:{
        user: {
            userid: String;
            password: String;
            email: String;
            name: String;
            phone: String;
            birth: String;
            address: String;
        }
    }
}
//state
export interface UserState{
     userLoading: boolean;
     userData: any
     error:any
     token: null
}
const initialState: UserState = {
    userLoading: false,
    userData: null,
    error: null,
    token: null
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state, action){ state.userLoading = true, state.error = null},
        joinSuccess(state, action){ state.userLoading = false, state.error = action.payload},
        joinFailure(state, action){ state.userLoading = false, state.error = action.payload}
    }
})
const { reducer,actions }=userSlice
export const {
     joinRequest,joinSuccess,joinFailure
} = actions
export default reducer