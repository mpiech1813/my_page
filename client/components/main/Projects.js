import React, { Component } from 'react';
import StyCom, { PBlock, HypLink } from '../../style';

class Projects extends Component {
    render() {
        return (
            <div>
                <StyCom.Break />
                <StyCom.HomePage id='projects'>
                    <h1>Projects</h1>
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
                                Back End, log in, Github OAuth, boilerplates
                            </PBlock>
                        </li>
                        <li>
                            <h3>Technologies Used: </h3>
                            <PBlock>
                                Node.js | Express | PostgreSQL | Sequelize |
                                React.js | React-Redux | GitHub API | EJS | Web
                                Sockets | JWT | Jest | MaterialUI | Styled
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
                                Firefox extension for taking notes on YouTube
                                videos
                            </PBlock>
                        </li>
                        <li>
                            <h3>Technology Used: </h3>
                            <PBlock>Firefox browser engine</PBlock>
                        </li>
                    </ul>
                    <br />

                    <HypLink
                        target='_blank'
                        href='http://howtheturntables.com/#/'
                    >
                        HOW-THE-TURNTABLES (GROUP PROJECT) | MAY 2021
                    </HypLink>
                    <ul>
                        <li>
                            <h3>Description: </h3>
                            <PBlock>
                                E-commerce store for bootleg records
                            </PBlock>
                        </li>
                        <li>
                            <h3>Contributions: </h3>
                            <PBlock>Log-in, backend, artist’s view</PBlock>
                        </li>
                        <li>
                            <h3>Technologies Used: </h3>
                            <PBlock>
                                Node.js | Express | PostgreSQL | Sequelize |
                                React.js | React-Redux | React Hooks | Stripe
                                API | Jest | MaterialUI | Styled | Faker
                            </PBlock>
                        </li>
                    </ul>
                </StyCom.HomePage>
            </div>
        );
    }
}

export default Projects;
