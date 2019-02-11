
export function getCompanies(){

    return  (dispatch) => {
        dispatch({type: 'FETCH_COMPANIES'})
    }
}

export function selectCompany(id){
    return (dispatch) => {
        dispatch({type: 'SHOW_COMPANY', payload: id})
    }
}

export function fetchCompanies(){
    return (dispatch) => {
        dispatch({
            type: 'FETCH_COMPANIES'
        })
    }
}