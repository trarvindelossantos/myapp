import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getCompanies, selectCompany } from '../actions/company.action';
import Companies from '../components/Companies';

class CompanyContainer extends Component {
    constructor(props) {
        super(props);
        this.countRender = 1;
        this.state = {
            companies: []

        }
        
    }

    shouldComponentUpdate(nextProps){
        return !nextProps.loading.status
    }
    
    componentDidMount() {
        setTimeout(()=> {
            this.props.getCompanies();
        }, 500)
    }
    render() {
        
        return (
            <div>
                <h3>Companies</h3>
                <div className="row">
                    <br />
                    <div className="col-md-12">
                    {
                            !this.props.loading.status ? 
                                (<Companies companies={this.props.companies} selectCompany={this.props.selectCompany}/>) 
                                : this.props.loading.message
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.company_reducer.companies,
        loading: state.company_reducer.loading,
        companyIsSelected: state.company_reducer.companyIsSelected,
        selectedCompany: state.company_reducer.selectedCompanyInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCompanies: () => { 
            dispatch(getCompanies()) 
        },

        selectCompany: (company) => {
            dispatch(selectCompany(company));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);