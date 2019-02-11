import React, { Component } from 'react'
import { connect } from 'react-redux';
import { get_budget, post_budget, show_budget } from '../actions/budget.action';
import BudgetList from '../components/BudgetList'
import EditBudget from '../components/EditBudget';
import {Loader} from '../components/shared/loader'

class BudgetContainer extends Component {
    constructor(props) {
        super(props);
        this.countRender = 1;
        this.state = {
            budget_list: [],
            is_fetching: true,
            budgetMessage: "Loading Budgets List",
            budget_name: "",
            budget_amount: 0.00,
            hasUpdated: false,
            loading: false,
        }
        
    }

    inputChanged = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        });
    }

    saveBudget = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            loading: !prevState.loading
        }))
        setTimeout(() => {
            this.props.post_budget(this.state.budget_name.toString(), this.state.budget_amount.toString());
            this.setState({
                budget_name: "",
                budget_amount: 0.00
            });
        }, 1000)
    }


    componentDidMount() {
        this.props.get_budget();
    }



    render() {
        
        return (
            <div>
                <h3>Create</h3>
                <form onSubmit={this.saveBudget}>    
                    <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Budget Name</label>
                                    <input type="text" className="form-control" name="budget_name"  onChange={this.inputChanged} value={this.state.budget_name} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Budget Amount</label>
                                    <input type="number" className="form-control" name="budget_amount"  onChange={this.inputChanged} value={this.state.budget_amount} />
                                </div>
                            </div>
                            <div className="col-md-4">
                            <br/>
                                <button className="btn btn-primary" type="submit"><i className="fa fa-save"></i> Save</button>
                            </div>    
                    </div>
                </form>
                <br/>
                <div className="row">

                    <div className="col-md-6">
                        <h4><i className="fa fa-list"></i> Budgets List </h4>
                            {
                                !this.props.is_fetching ? 
                                    (<BudgetList budgets={this.props.budgets} showBudget={this.props.show_budget}  />) 
                                    : (<Loader />)
                            } 
                    </div>
                    <div className="col-md-6">
                        {<EditBudget deleteBudget={this.props.delete_budget} budgetHasUpdated={this.budgetHasUpdated} budgetIsSelected={this.props.budgetIsSelected} selectedBudget={this.props.selectedBudget}  />} 
                            
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        budgets: state.budget_reducer.budgets,
        is_fetching: state.budget_reducer.is_fetching,
        budgetIsSelected: state.budget_reducer.budgetIsSelected,
        selectedBudget: state.budget_reducer.selectedBudget
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get_budget: () => { 
            dispatch(get_budget()); 
        },
        post_budget: (description, amount) => {
            dispatch(post_budget(description, amount));
        },
        show_budget: (budget) => {
            dispatch(show_budget(budget));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);