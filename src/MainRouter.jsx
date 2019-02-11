import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import BudgetContainer from './containers/BudgetContainer'
import CompanyContainer from './containers/CompanyContainer';     
import CompanyView from './containers/ComanyView';
import CompanyEdit from './containers/CompanyEdit';

class MainRouter extends Component {
    render () {
        return (
            <Switch>
                <Route path="/budgets" component={BudgetContainer} exact />
                <Route path="/companies" component={CompanyContainer} exact />
                <Route path="/companies/:id" component={CompanyView}  exact />
                <Route path="/companies/:id/" component={CompanyEdit}  exact />
            </Switch>
        );
    }
}

export default MainRouter;