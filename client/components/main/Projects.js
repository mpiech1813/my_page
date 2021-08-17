import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker';

class Projects extends Component {
    render() {
        const dataArr = new Array(18).fill(faker.lorem.paragraphs());
        return (
            <div id='projects'>
                <Title>This is Projects page</Title>
                <div style={{ color: 'green' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;
