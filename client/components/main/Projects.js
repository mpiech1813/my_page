import React, { Component } from 'react';
import StyCom, { PBlock } from '../../style';

class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <StyCom.Break />
                <StyCom.Title>This is Projects page</StyCom.Title>
                <h2>BOILERPLATE BUILDER (CAPSTONE PROJECT) | JULY 2021</h2>
                <h3>Description: </h3>
                <PBlock>Template creator for the PERN Stack</PBlock>
                <h3>Contributions: </h3>
                <PBlock>Backend, log in, Github OAuth, boilerplates</PBlock>
                <h3>Technologies: </h3>
                <PBlock>
                    Node.js | PostgreSQL | Sequelize | React.js | React-Redux |
                    GitHub API | EJS | Web Sockets | JWT
                </PBlock>
                <br />
                <h2>NOTE-YT (PERSONAL PROJECT) | MAY 2021</h2>
                <h3>Description: </h3>
                <PBlock>
                    Firefox extension for taking notes on YouTube videos
                </PBlock>
                <h3>Technology: </h3>
                <PBlock>Firefox browser engine</PBlock>

                <h2>HOW-THE-TURNTABLES (GROUP PROJECT) | MAY 2021</h2>
                <h3>Description: </h3>
                <PBlock>E-commerce store for bootleg records</PBlock>
                <h3>Contributions: </h3>
                <PBlock>Log-in, backend, artist’s view</PBlock>
                <h3>Technologies: </h3>
                <PBlock>Node.js, Sequelize, React.js, Stripe API</PBlock>
            </div>
        );
    }
}

export default Projects;
