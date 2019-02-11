import { combineReducers } from 'redux'

import budget_reducer from './budget.reducer';
import company_reducer from './company.reducer';


const rootReducer = combineReducers({
    budget_reducer,
    company_reducer
})
export default rootReducer;