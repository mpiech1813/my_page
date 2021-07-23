import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

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
        <NavBar></NavBar>

        <Footer />
      </div>
    );
  }
}

export default App;
