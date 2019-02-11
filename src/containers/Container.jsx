import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import MainRouter from '../MainRouter'

import Header from '../components/layouts/Header'

class Main extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <header>
                        <Header/>
                    </header>
                    <br/>
                    <main className="container-fluid">
                        <MainRouter/>
                    </main>
                </React.Fragment>

            </Router>
        );
    }
}

export default Main