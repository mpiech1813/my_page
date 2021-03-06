import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';

const root = document.getElementById('app');

ReactDOM.render(
    <Router>
        <div>
            <App />
            <Switch>
                <Route
                    path='/home'
                    render={() =>
                        window.scrollTo({ behavior: 'smooth', top: 0 })
                    }
                    exact
                />
                <Route
                    path='/about'
                    render={() => {
                        document.getElementById('about').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }}
                />
                <Route
                    path='/contact'
                    render={() =>
                        document.getElementById('contact').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    }
                />
                <Route
                    path='/projects'
                    render={() =>
                        document.getElementById('projects').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    }
                />
                <Route
                    path='/achievements'
                    render={() =>
                        document.getElementById('achievements').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    }
                />
            </Switch>
        </div>
    </Router>,
    root
);
