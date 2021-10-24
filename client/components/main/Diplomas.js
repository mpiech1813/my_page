import React, { Component } from 'react';
import StyCom, { Title, Break } from '../../style';
import faker from 'faker';

class Diplomas extends Component {
    render() {
        const dataArr = new Array(20).fill(faker.lorem.paragraphs());
        return (
            <div id='achievements'>
                <Break />
                <Title>This is the Achievement page</Title>
                <div style={{ color: 'red' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Diplomas;
