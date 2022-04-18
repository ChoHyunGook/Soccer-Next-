import {takeLatest ,all, put} from 'redux-saga/effects'
import { articleJoin } from './articleSaga.ts'
import { todoJoin } from './todoSaga.ts'
import { userJoin } from './userSaga.ts'



export default function* rootSaga(){
     yield all([userJoin(), articleJoin(),todoJoin()])
}
