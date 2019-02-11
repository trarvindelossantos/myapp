import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

//saga
import { budget_saga } from './sagas/budget.saga';
import { fetchCompanies_watcher, showCompany_watcher } from './sagas/company.saga';
//reducer
import rootReducer from './reducers/reducer';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunk, sagaMiddleware)
 ) 
 
 sagaMiddleware.run(budget_saga);
 sagaMiddleware.run(fetchCompanies_watcher);
 sagaMiddleware.run(showCompany_watcher);
