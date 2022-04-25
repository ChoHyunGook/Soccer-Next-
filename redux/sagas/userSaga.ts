import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '../reducers/userReducer.ts';
import { postUser, loginApi } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}

function* join(user: UserJoinType){
    try{
        const response : UserJoinSuccessType = yield postUser(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         yield put(userActions.joinFailure(error)) 
    }
}
function* login(login: UserLoginType){
    try{
        alert(' *** saga내부 join 성공 *** '+ JSON.stringify(login))
        const response : UserLoginSuccessType = yield loginApi(login.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         alert(' *** saga내부 join 실패 *** ')
         yield put(userActions.joinFailure(error)) 
    }
}
export function* userJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* userLogin(){
    yield takeLatest(userActions.joinRequest, login)
}
