import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios'



function* fetchCompanies_SUCCESS(){
    const companies = yield call([axios, axios.get], 'http://10.0.16.239:4000/companies')
    yield put({
        type: 'FETCH_COMPANIES_SUCCESS',
        payload: companies.data
    })
}

function* showCompany_SUCCESS(action){
    const company = yield call([axios, axios.get], `http://10.0.16.239:4000/companies/${action.payload}`)
    yield put({
        type: 'SHOW_COMPANY_SUCCESS',
        payload: company.data
    })
}

export function* fetchCompanies_watcher(){
    yield takeLatest('FETCH_COMPANIES', fetchCompanies_SUCCESS)
    
}


export function* showCompany_watcher(){
    yield takeEvery('SHOW_COMPANY', showCompany_SUCCESS);
}