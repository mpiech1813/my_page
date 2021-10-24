import React, { Component } from 'react';
import StyCom, { PBlock, HypLink } from '../../style';

class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <StyCom.Break />
                <StyCom.Title>This is Projects page</StyCom.Title>
                <HypLink
                    target='_blank'
                    href='https://boiler-plate-creator.herokuapp.com/#/'
                >
                    BOILERPLATE BUILDER (CAPSTONE PROJECT) | JULY 2021
                </HypLink>
                <ul>
                    <li>
                        <h3>Description: </h3>
                        <PBlock>Template creator for the PERN Stack</PBlock>
                    </li>
                    <li>
                        <h3>Contributions: </h3>
                        <PBlock>
                            Backend, log in, Github OAuth, boilerplates
                        </PBlock>
                    </li>
                    <li>
                        <h3>Technologies: </h3>
                        <PBlock>
                            Node.js | PostgreSQL | Sequelize | React.js |
                            React-Redux | GitHub API | EJS | Web Sockets | JWT
                        </PBlock>
                    </li>
                </ul>
                <br />
                <HypLink
                    target='_blank'
                    href='https://github.com/mpiech1813/note-yt'
                >
                    NOTE-YT (PERSONAL PROJECT) | MAY 2021
                </HypLink>

                <ul>
                    <li>
                        <h3>Description: </h3>
                        <PBlock>
                            Firefox extension for taking notes on YouTube videos
                        </PBlock>
                    </li>
                    <li>
                        <h3>Technology: </h3>
                        <PBlock>Firefox browser engine</PBlock>
                    </li>
                </ul>
                <br />

                <HypLink target='_blank' href='http://howtheturntables.com/#/'>
                    HOW-THE-TURNTABLES (GROUP PROJECT) | MAY 2021
                </HypLink>
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
