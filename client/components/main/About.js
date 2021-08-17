import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker';

class About extends Component {
    render() {
        const dataArr = new Array(10).fill(faker.lorem.paragraphs());
        return (
            <div id='about'>
                <Title>This is the About Me section</Title>
                <div style={{ color: 'white' }}>
                    {dataArr.map((element, i) => {
                        // {console.log(key)}
                        return <p key={i}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default About;
