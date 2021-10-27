import React, { Component } from 'react';
import { connect } from 'react-redux';
import StickyBox from 'react-sticky-box';

import { MainContainer } from '../style';
import Footer from './basic/Footer';
import NavBar from './basic/Navbar';
import About from './main/About';
import Contact from './main/Contact';
import Work from './main/Work';
import Projects from './main/Projects';
import Education from './main/Education';

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#bfbfbf' }}>
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
                        <Contact />
                        <About />
                        <Projects />
                        <Work />
                        <Education />
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
