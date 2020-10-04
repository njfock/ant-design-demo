import { call, put } from 'redux-saga/effects'

import { actionTypes as userActions } from '../../features/users'

export default function* tryUsersList(){
    try {
        //consume API
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])
        //dispatch success action
        yield put({ type: userActions.LIST_SUCCESS, data})
    } catch {
        //if error dispatch failed action
        yield put({ type: userActions.LIST_FAILED})
    }
}