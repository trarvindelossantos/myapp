

import { put, takeLatest } from 'redux-saga/effects'

export function* budget_saga(){
    yield takeLatest('GET_BUDGET', function*(action) {
        yield put({
            type: 'GET_BUDGET_A',
            payload: action.payload
        });
    })
}




