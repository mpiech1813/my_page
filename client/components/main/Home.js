import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhoneSquareAlt,
    faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Title, Break, HomePage } from '../../style';

class Home extends Component {
    render() {
        return (
            <HomePage id='home'>
                <Break />
                <Title>Kacper Piech</Title>
                {/* <div style={{ color: 'blue' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div> */}
                <div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href='https://www.linkedin.com/in/kacperpiech/'>
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>maciejpiech18@gmail.com</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <p>Greater Chicago Area</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            <p>(847) 361-5381</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href='https://github.com/mpiech1813'>GitHub</a>
                        </div>
                    </div>
                </div>
            </HomePage>
        );
    }
}

export default Home;
