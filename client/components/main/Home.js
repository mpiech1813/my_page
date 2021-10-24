import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhoneSquareAlt,
    faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import StyCom, { PBlock } from '../../style';

class Home extends Component {
    render() {
        return (
            <StyCom.HomePage>
                {/* <StyCom.Break /> */}
                <h1>Kacper Piech</h1>
                {/* <div style={{ color: 'blue' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div> */}
                <div>
                    <StyCom.ContentDiv>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <PBlock> </PBlock>
                            <a
                                target='_blank'
                                href='https://www.linkedin.com/in/kacperpiech/'
                            >
                                LinkedIn
                            </a>
                        </div>
                        <StyCom.SpaceDiv />
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <PBlock> </PBlock>
                            <a href='mailto: maciejpiech18@gmail.com'>
                                maciejpiech18@gmail.com
                            </a>
                        </div>
                        <StyCom.SpaceDiv />

                        <div>
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <PBlock> </PBlock>
                            <PBlock>Greater Chicago Area</PBlock>
                        </div>
                    </StyCom.ContentDiv>
                    <hr
                        style={{
                            border: '0px',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                        }}
                    />
                    <StyCom.ContentDiv>
                        <div>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            <PBlock> (847) 361-5381</PBlock>
                        </div>
                        <StyCom.SpaceDiv />

                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <PBlock> </PBlock>
                            <a
                                target='_blank'
                                href='https://github.com/mpiech1813'
                            >
                                GitHub
                            </a>
                        </div>
                    </StyCom.ContentDiv>
                </div>
            </StyCom.HomePage>
        );
    }
}

export default Home;
