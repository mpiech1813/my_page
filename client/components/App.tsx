import React, { Component, Fragment } from "react";
import StickyBox from "react-sticky-box";

import { MainContainer } from "../style.js";
import Footer from "./basic/Footer";
import NavBar from "./basic/Navbar";
import About from "./main/About.js";
import Contact from "./main/Contact.js";
import Work from "./main/Work.js";
import Projects from "./main/Projects.js";
import Education from "./main/Education.js";

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
        <Footer />
      </div>
    );
  }
}

export default App;
