import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './basic/Footer';
import NavBar from './basic/Navbar';
import About from './main/About';
import Home from './main/Home';
import Contact from './main/Contact';
import Projects from './main/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route component={NavBar} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
          <Route component={Footer} />
        </Router>
      </div>
    );
  }
}

export default App;
