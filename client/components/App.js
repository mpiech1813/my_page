import React, { Component, Fragment } from "react";
import StickyBox from "react-sticky-box";

import { MainContainer } from "../style";
// import Footer from './basic/Footer';
import NavBar from "./basic/Navbar.tsx";
import About from "./main/About";
import Contact from "./main/Contact";
import Work from "./main/Work";
import Projects from "./main/Projects";
import Education from "./main/Education";

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <StickyBox>
            <NavBar />
          </StickyBox>
          <MainContainer>
            <Fragment>
              <Contact />
              <About />
              <Projects />
              <Work />
              <Education />
            </Fragment>
          </MainContainer>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
