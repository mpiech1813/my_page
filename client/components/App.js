import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './basic/Footer';
import NavBar from './basic/Navbar';
import About from './main/About';
import Home from './main/Home';
import Contact from './main/Contact';
import Projects from './main/Projects';
import Achievements from './main/Diplomas';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route component={NavBar} />
                    <Route
                        path='/'
                        component={Home}
                        onEnter={() => {
                            document.getElementById('home').scrollIntoView();
                        }}
                    />
                    <Route
                        path='/about'
                        component={About}
                        onEnter={() => {
                            document.getElementById('about').scrollIntoView();
                        }}
                    />
                    <Route
                        path='/contact'
                        component={Contact}
                        onEnter={() => {
                            document.getElementById('contact').scrollIntoView();
                        }}
                    />
                    <Route
                        path='/projects'
                        component={Projects}
                        onEnter={() => {
                            document
                                .getElementById('projects')
                                .scrollIntoView();
                        }}
                    />
                    <Route
                        path='/achievements'
                        component={Achievements}
                        onEnter={() => {
                            document
                                .getElementById('achievements')
                                .scrollIntoView();
                        }}
                    />
                    {/* <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/achievements" component={Achievements} />
          </Switch> */}
                    <Route component={Footer} />
                </Router>
            </div>
        );
    }
}

export default App;
