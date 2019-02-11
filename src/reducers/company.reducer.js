//import _ from 'lodash';
export const GET_COMPANY = 'GET_COMPANY';
export const POST_COMPANY = 'POST_COMPANY';
export const SHOW_COMPANY = 'SHOW_COMPANY'
export const SHOW_COMPANY_SUCCESS = 'SHOW_COMPANY_SUCCESS'
export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS'; //companies list

const companyState = {
    loading: {
        status: true,
        message: "Loading Companies"
    },
    companyIsSelected: false,
    selectedCompanyInfo: [],
    companies: []
};



const company_reducer = (state = companyState, action) => {
    switch (action.type) {
        case GET_COMPANY:
            state = {
                ...state,
                loading:{
                    ...state.loading,
                    message: "Loading Companies"
                },
                companies: action.payload,
                selectedCompanyInfo: []
            }
            break;
        case FETCH_COMPANIES:
            state = {
                ...state,
                loading:{
                    ...state.loading,
                    message: "Loading Companies"
                }
            }
            break;
        case FETCH_COMPANIES_SUCCESS:
            state = {
                ...state,
                loading:{
                    ...state.loading,
                    status: false
                },
                companies: action.payload
            }
            break
        case SHOW_COMPANY:
            state = {
                ...state,
                companyIsSelected: false,
                selectedCompanyInfo: []
            }
            break;
        case SHOW_COMPANY_SUCCESS:
            console.log(action.payload)
            state = {
                ...state,
                companyIsSelected: true,
                selectedCompanyInfo: action.payload
            }
            break;
        default: //default
            return state;
    }
    return state;
};

export default company_reducer;