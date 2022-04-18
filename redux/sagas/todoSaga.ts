import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../reducers/todoReducer.ts';
import { postTodo} from '../api/todoApi.ts'

interface TodoJoinType{
    type: string;
    payload: {
     userid: '', task: '', completed: ''
    }
}
interface TodoJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}


function* join(todo: TodoJoinType){
    try{
        alert(' *** saga내부 join 성공 *** '+ JSON.stringify(todo))
        const response : TodoJoinSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.joinSuccess(response))
    }catch(error){
         alert(' *** saga내부 join 실패 *** ')
         yield put(todoActions.joinFailure(error)) 
    }
}
export function* todoJoin(){
    yield takeLatest(todoActions.joinRequest, join)
}