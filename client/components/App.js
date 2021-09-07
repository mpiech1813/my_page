import React, { Component } from 'react';
import { connect } from 'react-redux';
import StickyBox from 'react-sticky-box';

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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                    }}
                >
                    <StickyBox>
                        <NavBar />
                    </StickyBox>
                    <MainContainer>
                        <Home />
                        <About />
                        <Projects />
                        <Achievements />
                        <Contact />
                    </MainContainer>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(App);
