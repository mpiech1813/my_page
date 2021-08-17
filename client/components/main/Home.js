import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker';

class Home extends Component {
    render() {
        const dataArr = new Array(10).fill(faker.lorem.paragraphs());
        return (
            <div id='home'>
                <Title>This is Home page</Title>
                <div style={{ color: 'blue' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Home;
