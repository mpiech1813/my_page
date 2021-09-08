import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Title, Break } from '../../style';
import faker from 'faker';

class Home extends Component {
    render() {
        const dataArr = new Array(10).fill(faker.lorem.paragraphs());
        return (
            <div id='home'>
                <Break />
                <Title>Kacper Piech</Title>
                {/* <div style={{ color: 'blue' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div> */}
                <div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>maciejpiech18@gmail.com</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} />
                        <p>(847) 361-5381</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>linkedin.com/in/kacperpiech</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>https://github.com/mpiech1813</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
