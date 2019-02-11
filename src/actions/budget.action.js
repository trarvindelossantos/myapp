import axios from 'axios'

export const get_budget = () => {
    return  (dispatch) => {
        axios.get('http://10.0.16.239:4000/budgets')
                .then( res => {
                    dispatch({type: 'GET_BUDGET', payload: res.data})
                });
    }
}

export const post_budget = (description, amount) => {
    return (dispatch) => {
        axios.post('http://10.0.16.239:4000/budgets', {
            description: description,
            amount: amount
        })
            .then(response => {
                dispatch({
                    type: 'POST_BUDGET',
                    payload: response.data
                })
        });
    }
}

export const  show_budget = (budget) => {
    return (dispatch) => {
        axios.get(`http://10.0.16.239:4000/budgets/${budget.id}`)
            .then(response => {
                dispatch({
                    type: 'SHOW_BUDGET',
                    payload: response.data
                })
            });
    }
}

export const update_budget = (budget) => {
    return (dispatch) => {
        axios.put(`http://10.0.16.239:4000/budgets/${budget.id}`, {
                description: budget.description.toString(),
                amount: budget.amount.toString()
            })
            .then(response => {
                dispatch({
                    type: 'UPDATE_BUDGET',
                    payload: response.data
                })
            });
    }
}

export const delete_budget = (budget_id) => {
    return (dispatch) => {
        axios.delete(`http://10.0.16.239:4000/budgets/${budget_id}`)
                .then( () => {
                    dispatch({
                        type: 'DELETE_BUDGET',
                        payload: budget_id
                    })
                });
    }
}