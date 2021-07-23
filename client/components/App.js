import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './basic/Footer';
import NavBar from './basic/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>this App component is working</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
