import { takeLatest } from "redux-saga/effects"
import tryUserList from "./users/list"
import { actionTypes as userActions } from '../features/users'

export default function* rootSaga(){
    //Watcher
    yield takeLatest(userActions.LIST_TRY, tryUserList)
}