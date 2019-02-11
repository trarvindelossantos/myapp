import _ from 'lodash';
export const GET_BUDGET = 'GET_BUDGET';
export const POST_BUDGET = 'POST_BUDGET';
export const SHOW_BUDGET = 'SHOW_BUDGET';
export const UPDATE_BUDGET = 'UPDATE_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';

const budgetState = {
    is_fetching: true,
    budgetIsSelected: false,
    selectedBudget: [],
    budgets: []
};



const budget_reducer = (state = budgetState, action) => {
    switch (action.type) {
        case 'GET_BUDGET_A':
            state = {
                ...state,
                is_fetching: false,
                budgets: action.payload
            }
            break;
        case POST_BUDGET:
            state = {
                ...state,
                budgets: [
                    ...state.budgets,
                    action.payload
                ]
            }
            break;
        case SHOW_BUDGET:
            state = {
                ...state,
                budgetIsSelected: true,
                selectedBudget: action.payload
            }
            break;
        case UPDATE_BUDGET:
            state = {
                ...state,
                budgetIsSelected: false,
                selectedBudget: [],
                budgets: state.budgets.map( budget => budget.id === action.payload.id ? action.payload : budget)
            }
            break;
        case DELETE_BUDGET:
            state = {
                ...state,
                budgets: _.remove(state.budgets, (budget) => {
                    return budget.id !== action.payload
                })
            }
            break;
        default: //default
            return state;
    }
    return state;
};

export default budget_reducer;