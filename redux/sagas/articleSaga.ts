import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { articleActions } from '../reducers/articleReducer.ts';
import { postArticle } from '../api/articleApi.ts'

interface ArticleJoinType{
    type: string;
    payload: {
     passengerId: string, name: string, teamId: string, subject: string;
    }
}
interface ArticleJoinSuccessType{
    type: string;
    payload: {
        passengerId: string
    }
}


function* join(article: ArticleJoinType){
    try{
        alert(' *** saga내부 join 성공 *** '+ JSON.stringify(article))
        const response : ArticleJoinSuccessType = yield postArticle(article.payload)
        yield put(articleActions.joinSuccess(response))
    }catch(error){
         alert(' *** saga내부 join 실패 *** ')
         yield put(articleActions.joinFailure(error)) 
    }
}
export function* articleJoin(){
    yield takeLatest(articleActions.joinRequest, join)
}

