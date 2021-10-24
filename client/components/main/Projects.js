import React, { Component } from 'react';
import StyCom from '../../style';

class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <StyCom.Break />
                <StyCom.Title>This is Projects page</StyCom.Title>
                <h2>BOILERPLATE BUILDER (CAPSTONE PROJECT) | JULY 2021</h2>
                <h3>Description: </h3>
                <StyCom.PBlock>
                    Template creator for the PERN Stack
                </StyCom.PBlock>
                <h3>Contributions: </h3>
                <StyCom.PBlock>
                    Backend, log in, Github OAuth, boilerplates
                </StyCom.PBlock>
                <h3>Technologies: </h3>
                <StyCom.PBlock>
                    Node.js | PostgreSQL | Sequelize | React.js | React-Redux |
                    GitHub API | EJS | Web Sockets | JWT
                </StyCom.PBlock>
                <br />
                <h2>NOTE-YT (PERSONAL PROJECT) | MAY 2021</h2>
                <h3>Description: </h3>
                <StyCom.PBlock>
                    Firefox extension for taking notes on YouTube videos
                </StyCom.PBlock>
                <h3>Technology: </h3>
                <StyCom.PBlock>Firefox browser engine</StyCom.PBlock>

                <h2>HOW-THE-TURNTABLES (GROUP PROJECT) | MAY 2021</h2>
                <h3>Description: </h3>
                <StyCom.PBlock>
                    E-commerce store for bootleg records
                </StyCom.PBlock>
                <h3>Contributions: </h3>
                <StyCom.PBlock>Log-in, backend, artist’s view</StyCom.PBlock>
                <h3>Technologies: </h3>
                <StyCom.PBlock>
                    Node.js, Sequelize, React.js, Stripe API
                </StyCom.PBlock>
            </div>
        );
    }
}

export default Projects;
