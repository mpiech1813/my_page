import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhoneSquareAlt,
    faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Title, Break, HomePage, ContentDiv, PBlock } from '../../style';

class Home extends Component {
    render() {
        return (
            <HomePage>
                {/* <Break /> */}
                <Title>Kacper Piech</Title>
                {/* <div style={{ color: 'blue' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div> */}
                <div>
                    <ContentDiv>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href='https://www.linkedin.com/in/kacperpiech/'>
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <PBlock>maciejpiech18@gmail.com</PBlock>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <PBlock>Greater Chicago Area</PBlock>
                        </div>
                    </ContentDiv>
                    <hr
                        style={{
                            border: '0px',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                        }}
                    />
                    <ContentDiv>
                        <div>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            <PBlock>(847) 361-5381</PBlock>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href='https://github.com/mpiech1813'>GitHub</a>
                        </div>
                    </ContentDiv>
                </div>
            </HomePage>
        );
    }
}

export default Home;
