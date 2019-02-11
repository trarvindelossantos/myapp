import React from 'react'

const BudgetList = (props) => {
    //console.log(props)
    return (
        <table className="table table-hover table-condensed">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {
                    props.budgets.map( budget => {
                        return (
                            <tr key={budget.id} onClick={() => props.showBudget(budget)}>
                                <td>{budget.description}</td>
                                <td>{budget.amount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default BudgetList