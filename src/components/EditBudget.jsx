import React, { Component } from 'react'
import { update_budget, delete_budget, get_budget } from '../actions/budget.action';
import { connect } from 'react-redux';

class EditBudget extends Component {
    constructor(props){
        super(props);
        this.state = {
            budgetId: props.selectedBudget.id,
            description: props.selectedBudget.description,
            amount: props.selectedBudget.amount, 
            disabled: props.budgetIsSelected,
            
        }
    }

    //gets selected budget for state
    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            budgetId: nextProps.selectedBudget.id,
            description: nextProps.selectedBudget.description,
            amount: nextProps.selectedBudget.amount,
            disabled: nextProps.budgetIsSelected
        })
    }

    inputChanged = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        });
    }

    updateBudget = async (e) => {
        e.preventDefault();
        const budget = {
            id: this.state.budgetId,
            description: this.state.description,
            amount: this.state.amount
        }
        await this.props.update_budget(budget);
    }
    
    deleteBudget = (id) => {
        this.props.delete_budget(id);
        this.setState({
            description: "",
            amount: 0.00
        });
    }

    render() {
        return (
            <div className="card mb-3">
                <form onSubmit={this.updateBudget}>
                    <h3 className="card-header">Budget Information</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><input  type="text" disabled={!this.state.disabled} onChange={this.inputChanged} className="form-control" name="description" value={this.state.description || ""} /></li>
                        <li className="list-group-item"><input  type="text" disabled={!this.state.disabled} onChange={this.inputChanged} className="form-control" name="amount" value={this.state.amount || ""} /></li>
                    </ul>
                    <div className="card-body">
                        <button disabled={!this.state.disabled}  type="submit" className="btn btn-warning"><i className="fa fa-edit"></i> Update</button>
                        &nbsp;
                        <button disabled={!this.state.disabled} onClick={() => this.deleteBudget(this.state.budgetId)} className="btn btn-danger" type="button"><i className="fa fa-trash"></i> Delete</button>
                    </div>
                </form>
            </div>
        )
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
            dispatch(get_budget()) 
        },
        update_budget: (budget) => {
            dispatch(update_budget(budget))
        },
        delete_budget: (budget_id) => {
            dispatch(delete_budget(budget_id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBudget);