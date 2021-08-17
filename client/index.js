import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';

const root = document.getElementById('app');

ReactDOM.render(
    <Router>
        <div>
            <App />
            <Route path='/home' render={() => window.scrollTo(0, 0)} exact />
            <Route
                path='/about'
                render={() => document.getElementById('about').scrollIntoView()}
            />
            <Route
                path='/contact'
                render={() =>
                    document.getElementById('contact').scrollIntoView()
                }
            />
            <Route
                path='/projects'
                render={() =>
                    document.getElementById('projects').scrollIntoView()
                }
            />
            <Route
                path='/achievements'
                render={() =>
                    document.getElementById('achievements').scrollIntoView()
                }
            />
        </div>
    </Router>,
    root
);
