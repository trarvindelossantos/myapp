import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

import { selectCompany } from '../actions/company.action';
import {Loader} from '../components/shared/loader';

class ComanyView extends Component {

    constructor(){
        super();
        this.state = {
            company: null
        }
    }



    render() {
        return (
            <div>
                <div className="row">
                    <br />
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <h4 className="card-header">Company: {this.props.selectedCompany.name}</h4>
                            <div className="card-body">
                                <img style={{ height: "300px", width: "100%", display: "block" }} src={this.props.selectedCompany.image} alt="Card" />
                            </div>
                            
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Owner: {this.props.selectedCompany.owner}</li>
                                <li className="list-group-item">Location: {`${this.props.selectedCompany.location}, ${this.props.selectedCompany.country}`}</li>
                                <li className="list-group-item">Revenue: {this.props.selectedCompany.revenue}M</li>
                            </ul>
                            <div className="card-body">
                                <button type="submit" className="btn btn-primary btn-sm"><i className="fa fa-arrow-left"></i> Update</button>
                                &nbsp;
                                <Link to={`/companies/${this.props.selectedCompany.id}`} className="btn btn-warning btn-sm"><i className="fa fa-edit"></i> Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        companyIsSelected: state.company_reducer.companyIsSelected,
        selectedCompany: state.company_reducer.selectedCompanyInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCompany: (id) => {
            dispatch(selectCompany(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComanyView);