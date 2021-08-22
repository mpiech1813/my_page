import React, { Component } from 'react';

import { MainContainer } from '../style';
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
                <NavBar />
                <MainContainer>
                    <Home />
                    <About />
                    <Projects />
                    <Achievements />
                    <Contact />
                </MainContainer>
                <Footer />
            </div>
        );
    }
}

export default App;
